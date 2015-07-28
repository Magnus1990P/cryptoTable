/**
	* This is the function for decrypting a cipher text using the Vigenere
	* algorithm
	**/
function stepDecrypt(){
	if( checkStop( false ) ) return false;				//If end of string exit

	if( CLICK == 4 ){															//Stage for cleaning up the env
		$("#ptext").val( 	$("#ptext").val() + 			//Append decrypted letter to the
											$(".sel-cor").html()	); 	//	message textarea element
																								//Print descriptive message
		wMsgBox("Resetting board for next character", null, null);
		cleanUp();											//Clean up the environment
		MSGIN += 1;											//Increment msg index to next letter in cip
		KEYIN += 1;											//Increment key index to next letter in key
	}

	else if( CLICK == 3 ){ 						//Stage for getting the deciphered letter
		setClass( ROW, 0, "sel-cor" );	//Highlight the cell of deciphered letter

																		//Print descriptive message in message box
		wMsgBox(	"The next plaintext letter is the highlighted cell on the left " +
							"most column.",
																		//Print the function for decipherment	
																		//c - k % L = m
							"c<font class='sub'>" + MSGIN + "</font> - " +  
							"k<font class='sub'>" + KEYIN%key.length + "</font> % L = " +  
							"m<font class='sub'>" + MSGIN + "</font> <br />" +  

																		//Print the calculations using int values
							"m<font class='sub'>" + MSGIN + "</font>  = " + 
							alphabet.indexOf( cip[MSGIN] ) + " - " +
							alphabet.indexOf( key[ KEYIN % key.length ] ) + " % " +
							alphabet.length + " = " + alphabet.indexOf($(".sel-cor").html()) +
							" = " +	$(".sel-cor").html(),
							
							null );
		CLICK = 4;											//Set next stage
	}

	else if( CLICK == 2 ){						//Stage for finding cipher letters row
		row = alphabet.indexOf( cip[MSGIN] );		//Get value of cipher letter
																						//Calculate relative row position
		ROW = ( row - COL + alphabet.length ) % alphabet.length;
		setClass( ROW, null, "sel-row" );				//Highlight the row
																						//Print descriptive message
		wMsgBox( 	"Highlighting the row corresponding to the ciphertext letter " + 
							"in the highligted column.",
																						//Print value of the cipher letter
							"c<font class='sub'>" + MSGIN + "</font> = " +  
							cip[MSGIN] + " = " + row, null );
		CLICK = 3;																//Set next stage
	}


	else{															//Stage for finding column of the key letter
																		//Skip all charachters not in alphabet
		while( MSGIN < cip.length && alphabet.indexOf( cip[ MSGIN ] ) == -1 ){
			updateField( "#ptext", cip[ MSGIN ] );	//Add it to the plaintext directly
			MSGIN += 1;														 	//Increment index of cipher letter
		}

		if( checkStop( false ) ) return false;		//Quit if end of cipher text
																							//Get value of keyword letter
		COL = alphabet.indexOf( key[ KEYIN % key.length ] );
		setClass( null, COL, "sel-col" );					//Highlight the column for the key
																							//Print a descriptive message
		wMsgBox( "Highlighting the column corresponding to the current key letter.",
																							//Print value of key letter
							"k<font class='sub'>" + KEYIN%key.length + "</font>  = " +  
						 	key[ KEYIN % key.length ] + " = " + COL,	null );
		CLICK = 2;																//Set next stage
	}
}		//End of function

