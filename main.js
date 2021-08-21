const msg = document.createElement('template')
const $chatContainer = document.getElementById('chat-container')

document.addEventListener('click',(e) => {
    if (e.target.matches('.btn-light')) {
        scrollBottom($chatContainer)
    }
})

document.addEventListener('submit', e => {


    if (e.target.matches('#form-message')) {
        e.preventDefault()
        
        msg.innerHTML = `
        <div class="toast mt-2" style="opacity: 1;box-shadow: none;margin: auto;">
            <div class="toast-header">
                <strong class="me-auto">Roberto</strong>
            </div>
            <div class="toast-body">
                ${e.target.msg.value}
            </div>
        </div>
        `
        $chatContainer.append(msg.content)
        e.target.msg.value = ''
        scrollBottom($chatContainer)
    }
    
    
    
})

function scrollBottom(element) {
    
    element.scrollTo(
        {
            behavior:'smooth',
            left:0,
            top:element.scrollHeight
        }
    )
}