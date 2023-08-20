document.addEventListener('DOMContentLoaded', () => {
    function colorCodeFunct() {
        const chars = '0123456789abcdef';
        const charsLength = chars.length;

        function getCode() {
            let colorCode = '';
            for (let i = 0; i < 6; i++) {
                let char = chars.charAt(
                    Math.floor(Math.random() * charsLength)
                );

                colorCode += char;
            }
            return colorCode;
        }
        //display colors
        const colors = document.querySelectorAll('.color');
        colors.forEach((color) => {
            const colorCode = getCode();

            color.querySelector('.hex').textContent = '#' + colorCode;
            color.style.background = '#' + colorCode;
        });
    }
    colorCodeFunct();
    document.addEventListener('keypress', (event) => {
        const keyName = event.key;
        if (keyName === ' ') {
            colorCodeFunct();
        }
    });
});
