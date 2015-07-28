/**
	*	This is the function for decrypting a cipher text using the Beaufort
	*	algorithm
	**/
function stepDecrypt(){
	if( checkStop(false) ) return false;					//If end of string, Exit

	if( CLICK == 4 ){															//Stage for cleaning up the env
		$("#ptext").val( 	$("#ptext").val() + 			//Append decrypted letter to the
											$(".sel-cor").html( )	); 	//	message textarea element
																								//Print descriptive message
		wMsgBox("Resetting board for next character", null, null);
		cleanUp();										//Clean up the environment
		MSGIN += 1;										//Inc msg index to next letter in cip
		KEYIN += 1;										//Inc key index to next letter in key
	}

	else if( CLICK == 3 ){ 							//Stage for getting the decipered letter
		setClass( 0, COL, "sel-cor" );		//Highlight the cell of deciphered letter

																			//Print descriptive message in message box
		wMsgBox(	"The highlighted cell on the top row is the next plaintext " + 
							"letter in the deciphered message",
																			//Print the formula for decipherment
																			// k - c % L = m
							"k<font class='sub'>" + KEYIN%key.length + "</font> - " +  
							"c<font class='sub'>" + MSGIN + "</font> % L = " +  
							"m<font class='sub'>" + MSGIN + "</font><br />" +  

																			//Print the calculations using int values
							"m<font class='sub'>" + MSGIN + "</font> = " +  
							alphabet.indexOf( key[ KEYIN % key.length ] ) + " - " +
							alphabet.indexOf( cip[MSGIN] ) + " % " + alphabet.length + " = " +
							alphabet.indexOf($(".sel-cor").html()) + 
							" = " +	$(".sel-cor").html(),
							
							null );
		CLICK = 4;												//Set next stage
	}

	else if( CLICK == 2 ){							//Stage for finding the key letter column
																			//Get key letter value
		col = alphabet.indexOf( key[ KEYIN % key.length ] );
																			//Calculate relative column positon
		COL = ( col - ROW + alphabet.length ) % alphabet.length;
		setClass( null, COL, "sel-col" );	//Highlight the column
																			//Print descriptive message
		wMsgBox( 	"Marking the column corresponding to the key letter in the " + 
							"currently highlighted row.",
																			//Print value of the key letter
							"k<font class='sub'>" + KEYIN%key.length + "</font> = " +  
							key[KEYIN % key.length] + " = " + col , 
						 	null );
		CLICK = 3;												//Set next stage
	}

	else{														//Stage for finding row of the cipher letter
																	//Skip all characters not in the alphabet
		while( MSGIN < cip.length && alphabet.indexOf( cip[ MSGIN ] ) == -1 ){
			updateField( "#ptext", cip[ MSGIN ] );	//add it to the plaintext directly
			MSGIN += 1;															//Inc index of cipher letter
		}
		if( checkStop(false) == true )	return false;	//QUit if end of cipher text
		ROW = alphabet.indexOf( cip[ MSGIN ] );			//Get value of cipher letter
		setClass( ROW, null, "sel-row" );						//Highlight the row
																								//Print descriptive message
		wMsgBox( "Highlighting the row corresponding to the current ciphertext " + 
							"letter.", 
																								//Print value of cipher letter
							"c<font class='sub'>" + MSGIN + "</font> = " +  
							cip[MSGIN] + " = " + ROW,	null );
							
		CLICK = 2;																	//Set next stage
	}
}

