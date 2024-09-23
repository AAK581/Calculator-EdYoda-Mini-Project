let calculator = document.getElementById('calcBtns');
let textArea = document.getElementById('calcWin');

calculator.addEventListener('click', function(e) {
    const btn = document.querySelector(`div[data-key="${e.target.innerHTML}"]`)
    let expr = textArea.innerHTML;
    if (btn.innerHTML == '=')
    {
        let called = false;
        textArea.innerHTML = eval(expr);
        calculator.addEventListener('click', function(e) {
            if (!called) 
            {
               textArea.innerHTML = e.target.innerHTML;
                called = true;
            }
            
        })
    }
    else if (btn.innerHTML == 'C') {
        textArea.innerHTML = '';
    }
    else 
    {
        expr += btn.innerHTML;
        textArea.innerHTML = expr;
    }
    
})

document.body.addEventListener('keydown', function(e) {  
    let reg = /^[0-9cC+\-/*]$/;
    if (reg.test(e.key) || e.key == 'Enter')
    {
        if (e.code == 'KeyC')
            {
                textArea.innerHTML = '';
                return;
            }
        else {
            let expr = textArea.innerHTML;
            if (e.key == 'Enter')
            {
                let called = false;
                textArea.innerHTML = eval(expr);
                document.body.addEventListener('keydown', function(e) {
                    if (!called) 
                    {
                        if (e.code !== 'KeyC' && reg.test(e.key))
                        {
                            console.log(reg.test(e.key))
                            textArea.innerHTML = e.key;
                            called = true;
                        }
                    }
                    
                })
            }
            else {
            const btn = document.querySelector(`div[data-key="${e.key}"]`);
            if (e.key != '=')
                {
                    expr += btn.innerHTML;
                    textArea.innerHTML = expr;
                }
            }
        }
    }
    else
    {
        console.log('Invalid button')
    }
})