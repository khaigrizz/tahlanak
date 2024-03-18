function displayGreeting() {
    var name = document.getElementById('nameInput').value;
    var greeting = document.getElementById('greeting');
    
    if (name) {
        greeting.innerHTML = 'Hello, ' + name + '! Welcome to our website.';
    } else {
        greeting.innerHTML = 'Please enter your name.';
    }
}
