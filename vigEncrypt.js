/**
	*	Function for encrypting a plaintext using the Vigener algorithm
	**/
function stepEncrypt(){					
	if( checkStop( true ) ) return false;		//If end of message exit

	if( CLICK == 4 ){												//Cleanup stage of algorithm
		$("#ctext").val( 	$("#ctext").val() + //Add cipher letter to text field
											$(".sel-cor").html( )	); 
																					//Print descriptive message
		wMsgBox("Resetting board for next character", null, null);
		cleanUp();														//Cleanup environment
		MSGIN += 1;														//Inc to next message letter
		KEYIN += 1;														//Inc to next key letter
	}

	else if( CLICK == 3 ){ 									//Find next cipher text letter
		setClass( ROW, COL, "sel-cor" );			//Highlight the cipher text letter
																					//Print descriptive message
		wMsgBox(	"The highlighted cell in the intersection of the highlighted " + 
							"row and column is the next ciphertext letter.",
						
																					//Print calculation formula
																					// m + k % L = c
							"m<font class='sub'>" + MSGIN + "</font> + " +  
							"k<font class='sub'>" + KEYIN%key.length + "</font> % L = " +  
							"c<font class='sub'>" + MSGIN + "</font><br />" +  

																					//Print calculations using values
							"c<font class='sub'>" + MSGIN + "</font> = " +  
							ROW + " + " + COL + " % " + alphabet.length + " = " + 
							alphabet.indexOf( $(".sel-cor").html( ) ) +
							" = " +	$(".sel-cor").html(),

							null );
		CLICK = 4;														//Next stage
	}

	else if( CLICK == 2 ){ 										//Find the column of the key letter
																						//Grab the value of the key letter
		COL = alphabet.indexOf( key[ KEYIN % key.length ] );
		setClass( null, COL, "sel-col" );				//Highlight the column
																						//Print descriptive message
		wMsgBox( 	"Highlighting the column of the current key letter on the top " + 
							"row of the table.",
																						//Print the key letter value
							"k<font class='sub'>" + KEYIN%key.length + "</font> = " +  
						 	key[ KEYIN % key.length ] + " = " + COL,
						 	null );
		CLICK = 3;															//next stage
	}

	else{															//First stage, find row of plaintext letter
																						//For letters not in alphabet
		while( MSGIN < msg.length && alphabet.indexOf( msg[ MSGIN ] ) == -1 ){
			updateField( "#ctext", msg[MSGIN] );	//add them to the cipher text
			MSGIN += 1;														//inc index in the message
		}		
		if( checkStop( true ) ) return false;		//If end of message quit
		ROW = alphabet.indexOf( msg[ MSGIN ] );	//Get the value of message letter
		setClass( ROW, null, "sel-row" );				//Highlight the ROW
																						//Print descriptive message
		wMsgBox( "Highlighting the row of the current plaintext letter.", 	
																						//Print the message letter value
							"m<font class='sub'>" + MSGIN + "</font> = " +  
							msg[MSGIN] + " = " + ROW, null );
		CLICK = 2;															//next stage
	}
}
