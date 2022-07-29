var numInput = document.getElementById('amount');
numInput.addEventListener('blur', function () {
    if (this.value === '') {
        return;
    }
    this.setAttribute('type', 'text');
    if (this.value.indexOf('.') === -1) {
        this.value = this.value + '.00';
    }
    while (this.value.indexOf('.') > this.value.length - 3) {
        this.value = this.value + '0';
    }
});
numInput.addEventListener('focus', function () {
    this.setAttribute('type', 'number');
});