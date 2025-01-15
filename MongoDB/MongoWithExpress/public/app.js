let deleteBtns = document.querySelectorAll(".delete");

deleteBtns.forEach((del) => {
    del.addEventListener("click", (event) => {
        event.preventDefault();
        let result = confirm("Do you want to delete this chat");
        if(result) {
            console.log("Chat deleted");
            del.closest("form").submit();
        } else {
            console.log("Chat not deleted");
        }
    })
})