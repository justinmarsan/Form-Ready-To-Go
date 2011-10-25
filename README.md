Form-Ready-To-Go
================

The point of this micro framework is to speed up styling form by providing a _reset_ (which is more a simpler cross browser style than a pure reset), and a few classes handling positioning of label-input pairs.

On top of that some JS (jQuery powered) deals with (or will deal with) some of the elements that are really painful to style (such as selects, radio and checkboxes) to provide ehanced elements if possible (don't forget to style the default one).

That's pretty much it !


Provided Classes
================

`.top-label`
------------

This class makes your labels on top of the inputs. Really simple, effective when you need to save horizontal space. Just apply it to the `form` or `fieldset` element.

`.left-label` and `.right-label`
--------------------------------

Those classes makes your labels on the left of their respective inputs, `.left-label` aligns them on the left and obviously `.right-label` aligns them to the right.

The labels have a fixed width of 120px, either change that directly in the classes, or add an id to the wrapping element and override it. If you do so don't forget to change the margin left of `submit` and `button` elements as they are marged to align them with the other inputs.

`.form-select` and `.form-select-open`
--------------------------------------

Those classes are applied (in JS) to the `ul` elements replacing `select`.

.form-select is the default class, .form-select-open is added when the user clicks to select another one. JS handles the changes of selected value.
For it to work properly your select must have a `name` attribute and each option must have a `value` attribute (but why wouldn't they you write valid code don't you ?).

`.radio-check-label`
--------------------

This class is used for nested label declaration for checkboxes and radio buttons like this :

	<label for="radio-button" class="radio-check-label"><input name="radio-button" type="radio" />Option 1</label>

TODO : ehance this with JS to use custom images as radio buttons and checkboxes.