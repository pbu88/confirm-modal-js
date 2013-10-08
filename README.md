confirm-modal-js
================

A Javascript class that turns anchors and buttons into ConfirmationButtons, which asks for a confirmation before submiting an action.

You can declare your anchors or buttons like this:

    <a href="javascript:void(0);" class="confirm-btn"
       data-action="action"
       data-text="Are you sure you want to do this?"
       data-modal="#confirm-modal">
        Click Me
    </a>
    
    <button class="btn btn-primary confirm-btn"
        type="button"
        data-submit="#myform"
        data-text="Do you really want to submit this?"
        data-modal="#confirm-modal">
          Submit
    </button>

    
And have a confirm dialog show up before executing any form action or following any link!


