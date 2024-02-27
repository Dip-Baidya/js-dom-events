function handleOnClick() {
    const handleStatus = document.getElementById('handeler-status');
    handleStatus.innerText = 'I am Dip , I change The text Click on The Button'

}

document.getElementById('event-listner').addEventListener('click', function () {
    const handalerStatus = document.getElementById('handeler-status');
    handalerStatus.innerText = 'Text Updated by add Event Listner button'
})