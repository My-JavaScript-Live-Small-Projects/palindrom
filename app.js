function palindroming(){let getWord = document.getElementById('input').value;
    getWord = getWord.toLowerCase();
    let display = document.getElementById('display');
    let reversed = '';
    for(let i = getWord.length-1; i >=0;i--){reversed = reversed + getWord[i];
        if(reversed === getWord){
        display.innerHTML = `${getWord} is palindrome`
    }
    else{
       display.innerHTML = `${getWord} is not palindrome`
    }
    };
    
    
}