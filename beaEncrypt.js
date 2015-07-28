/**
 	*	Function for encrypting a plaintext using the Beaufort algorithm
	**/
function stepEncrypt(){
	if( checkStop(true) ) return false;			//If end of message exit

	if( CLICK == 4 ){												//Cleanup stage of algorithm
		$("#ctext").val( 	$("#ctext").val() + //Add cipher letter to text field
											$(".sel-cor").html( )	); 
																					//Printing descriptive message
		wMsgBox("Resetting board for next character", null, null);
		cleanUp();														//Cleanup environment
		MSGIN += 1;														//Inc to next message letter
		KEYIN += 1;														//Inc to next key letter
	}

	else if( CLICK == 3 ){ 									//Find next cipher text letter
		setClass( 0, COL, "sel-cor" );				//Highlight the cipher text letter
																					//Printing descriptive message
		wMsgBox(	"Character highlighted on the top row is the next letter in " + 
							"the cipher text.",

																					//Print calculation formula
																					// k - m % L = c
							"k<font class='sub'>" + KEYIN%key.length + "</font> - " +  
							"m<font class='sub'>" + MSGIN + "</font> % L = " +  
							"c<font class='sub'>" + MSGIN + "</font><br />" +  

																					//Print calculations using values
							"c<font class='sub'>" + MSGIN + "</font> = " +  
							alphabet.indexOf( key[ KEYIN % key.length ] ) + 
							" - " + ROW + " % " + alphabet.length + " = " + 
							alphabet.indexOf( $(".sel-cor").html( ) ) + 
							" = " +	$(".sel-cor").html(),

							null );
		CLICK = 4;														//Set next stage
	}

	else if( CLICK == 2 ){ 									//Find the column of the key letter
																					//Grab the value of the key letter
		col = alphabet.indexOf( key[ KEYIN % key.length ] );
																					//Calculate the relative column
		COL = ( col -	alphabet.indexOf( msg[MSGIN] ) + 
						alphabet.length ) % alphabet.length;

		setClass( null, COL, "sel-col" );			//Highlight the column
																					//Printing descriptive message
		wMsgBox( 	"Highlighting the column for the current key letter on the" + 
							" currently highlighted row", 
																					//Print the key letter value
							"k<font class='sub'>" + KEYIN%key.length + "</font> = " +  
							key[ KEYIN % key.length ] + " = " + col,
						 	null );
		CLICK = 3;
	}

	else{																			//Find row of plaintext letter
																						//For letters not in the alphabet
		while( MSGIN < msg.length && alphabet.indexOf( msg[ MSGIN ] ) == -1 ){
			updateField( "#ctext", msg[MSGIN] );	//Add them  the cipher text
			MSGIN += 1;														//Inc index in the message
		}
		if( checkStop( true ) == true )	return false;//If end of message quit
		ROW = alphabet.indexOf( msg[ MSGIN ] );	//Grab value of msg letter
		setClass( ROW, null, "sel-row" );				//Highlight row
																						//Printing descriptive message
		wMsgBox( "Higlighting the row of the plaintext letter.",
																						//Print the message letter value
							"m<font class='sub'>" + MSGIN + "</font> = " +  
							msg[MSGIN] + " = " + ROW, null );
		CLICK = 2;
	}
}
