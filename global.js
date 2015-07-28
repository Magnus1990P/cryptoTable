/**
	*	This is the main API where all basic functionality not specific towards the
	*	algorithmic methods reside.  This is among else global variabels, function
	*	for handling GUI and user's input / actions
	**/

//GLOBAL VARIABLES
alphabet = ['a', 'b', 'c', 'd', 'e', 	//Alphabet containing all available
				 		'f', 'g', 'h', 'i', 'j', 	//	characters
						'k', 'l', 'm', 'n', 'o', 
						'p', 'q', 'r', 's', 't', 
						'u', 'v', 'w', 'x', 'y', 'z'];
GLOBTIMER = null;											//Variable for automating en/decipherment
key 	= "";														//Keyword variable
msg 	= "";														//Plaintext message variable
cip		= "";														//Ciphertext message variable
CLICK = 1;														//Algorithm stage indicator
MSGIN	= 0;														//Index of character msg/cipher text
KEYIN	= 0;														//Index of character in keyword
ROW		= -1;														//Index of row to highlight in table
COL		= -1;														//Index of column to highlight in table
SPEED = 100;													//Perform anim step every SPEEDms

/**
	* Populates the table of all shift permutations of the alphabet.
	*	Creates a grid of LxL rows and columns, where L is the length of the
	*	alphabet
	**/
function popTable(){
	for( var i=0; i < alphabet.length; i++){		//For L rows in table
		var html = "<tr>";												//New row in table
		for( var j=0; j < alphabet.length; j++ ){	//For L cols in row
			html += '<td x="' + i + '" y="' + 			//<td x="i" y="j">_</td>
							j + '">' + 											
							alphabet[(i+j) % alphabet.length] + //Char of the shifted alphabet
							'</td>';
		}
		html += "</tr>";													//Close row tag
		$("#perm_table").append( html );					//Add the rows & cols to the table
	}
}

/**
 *	Retrieves the input values from the GUI and stores them in the global
 *	variables for use later in encryption and decryption.
 **/
function updateData(){
	cleanUp();															//Clean up the environment
	msg = $("#ptext").val().toLowerCase();	//Retrieve plaintext in lower case
	cip = $("#ctext").val().toLowerCase();	//Retrieve ciphertext in lower case
	key = $("#kword").val().toLowerCase();	//Retrieve the keyword in lower case
	CLICK =  1;															//Reset algorithm stage indicator
	ROW		= -1;															//Clear out the index for ROW
	COL		= -1;															//Clear out the index for COL
	MSGIN	=  0;															//Reset the index of "msg" to start
	KEYIN	=  0;															//Reset the index of "key" to start
}

//Write a set of texts inside the message box "msgbox" and format based on which
//text is sent as paramater
function wMsgBox( mainH, subH, msg ){
	$("#msgbox div").empty();
	if( mainH != null )									//append text to main header if provided
		$("#msgbox div").append("<h4>" + mainH	+ "</h4>");
	if( subH  != null )									//append text to sub header if provided
		$("#msgbox div").append("<h3>" + subH		+ "</h3>");
	if( msg		!= null )									//append simple text if provided
		$("#msgbox div").append( msg );
}

//Sets highlighting of a whole row, whole column or specific cell in the table
function setClass( R, C, CL ){
	if( CL != null ){								//if the CSS class is provided
		var S = "td[";								//Create jQuery selector statement
		if( R != null && C != null ){	//If both row and column is provided
			S += "x=" + R + "][y=" + C + "]";//Add both attributes
		}
		else if( C != null ){					//If column is provided
			S += "y=" + C + "]";				//Add column selection
		}
		else if( R != null ){					//If Row is provided
			S += "x=" + R + "]";				//Add row selection
		}
		$( S ).addClass( CL );				//For all matching elements add the CSS class
	}
}

//Removes added classes in the table, and resets some variables
function cleanUp(){
	$("td").removeClass("sel-row");	//Remove row class
	$("td").removeClass("sel-col");	//Remove column class
	$("td").removeClass("sel-cor");	//Remove single cell class
	CLICK =  1;											//Set algorithm stage index to 1
	ROW		= -1;											//Reset ROW to an unused value	
	COL		= -1;											//Reset COL to an unused value
}


//Checks if it has reached the end of the string, either ciphertext or plaintext
//message.  If enc is True it will print out the encrypted text, if false it
//will print the original message
function checkStop( enc ){
	var len = 0;										//Variable to check current index against
	if( enc ) len = msg.length;			//Grab length of message if encryption
	else			len = cip.length;			//Grab length of cipher if decryption

	if( MSGIN >= len ){							//If index of message has reached EOT
		if(	GLOBTIMER != null ){			//If the animation is npt stopped
			clearInterval( GLOBTIMER );	//Stop the animation
			GLOBTIMER = null;						//Resets the value for value checking
		}
		var output = ""; 											//String containing output text
		$("button").prop("disabled", true);		//Disable the buttons,
		$("#reset").prop("disabled", false);	//Enable the reset button
																					//Show the message in the banner box
		if( enc == true )											//If doing encryption
			string = "Encrypted text: \"<b>" + $("#ctext").val() + "</b>\"";
		else																	//If doing decryption
			string = "Original Message: \"<b>" + $("#ptext").val() + "</b>\"";
		
		$("#resText").html( string );					//Output the string to the GUI
		$("#msgbox").fadeOut(500);						//Fades out the message box
		$("#resText").slideDown( 500 );				//Animate the message 
		return true;													//Return true since at end of string
	}
	return false;														//Return false, not end of string
}

//Resets a textarea field if it is at the initial state of the algorithm
function startingState( FIELD ){
	if( MSGIN==0 && KEYIN==0 && CLICK==1){//If message and key index are zero
		$( FIELD ).val("");						//Blank out the text of the specified field
		updateData();									//Update the global data values
		$("#msgbox").fadeIn(500);			//Show the hidden messagebox
																	//Based on encryption or decryption is run
		if( FIELD == "#ctext")				//Disable decryption buttons
			$("#decryptRun,#decryptStep").prop("disabled", true);
		else													//Disable encryption buttons
			$("#encryptRun,#encryptStep").prop("disabled", true);
	}
}

//Starts or stop a trigger "clicking" the "Step encipher" button
function switchAnimator( TRIG, SPEED ){
	if( GLOBTIMER != null ){				//If the variable is set
		clearInterval( GLOBTIMER );		//Stop the repeating click trigger
		GLOBTIMER = null;							//Set it to null, due to checking
	}
	else{														//If variable is null
																	//Initiate a trigger every x seconds
		GLOBTIMER = setInterval( function(){ $(TRIG).trigger("click"); }, SPEED);
	}
}

//Update the content of a specified element
function updateField( F, S ){
	$( F ).val( $( F ).val( ) + S );	//Appends content of TXT to the field FLD
}



//ACTIONS PERFORMED AT LOAD
$("#resText, #msgbox").hide();			//Hide two elements from view
popTable();													//Populate the permuted alphabet table


//USER INTERACTION FUNCTIONALITY
		//Update global variables when a change occurs in the keyword field, message
		//field or cipher field
$("#kword,#ptext,#ctext").on("change", function(){ 
	updateData(); 		
});

	//Clicking the single step encryption button
$("#encryptStep").on("click", function(){
	startingState( "#ctext" );	//Reset cryptogram fields if at starting state
	stepEncrypt();							//Perform encryption step
});

	//Clicking the automate encryption button starts or stops the animation.
$("#encryptRun").on("click", function(){ 								
		switchAnimator("#encryptStep", SPEED);	//Animate each xms 
});

	//Clicking the single step decryption button
$("#decryptStep").on("click", function(){ 
	startingState( "#ptext" );	//Reset plaintext field if at starting state
	stepDecrypt();							//Perform decryption step
});

	//Clicking the automate decryption button starts or stops the animation.
$("#decryptRun").on("click", function(){ 
	switchAnimator("#decryptStep", SPEED);		//Animate each xms
});

	//Clicking the reset button
$("#reset").on("click", function(){
	$("#resText").slideUp( 500 );					//Hide the previous result text
	$("#msgbox").fadeOut(300);						//Fade out the msg box 
	$("button").prop("disabled", false);	//Sett all buttons to be accessible
	key = ""; msg = ""; cip = "";					//Reset global text values
	MSGIN = 0; KEYIN = 0;									//Reset indexes for strings
	cleanUp();														//Perform cleanup
	if( GLOBTIMER != null ){							//If animation is activated
		clearInterval( GLOBTIMER );					//Stop animation
		GLOBTIMER = null;										//Reset variable
	}
});
