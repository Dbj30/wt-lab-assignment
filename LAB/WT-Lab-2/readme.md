![buttons](buttons.jpg)
![borders](borders.jpg)

Borders
When learning about the Box Model, we discovered how borders affect the size of our box. In this lesson we will look at how to use borders creatively. Typically when we add borders to an element with CSS we use a shorthand property that sets the color, width, and style of the border in one line of CSS.

We can set a border for all four sides of a box with border:

.box {
  border: 1px solid black;
}
Copy to Clipboard
Or we can target one edge of the box, for example:

.box {
  border-top: 1px solid black;
}
Copy to Clipboard
The individual properties for these shorthands would be:

.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
Copy to Clipboard
And for the longhands:

.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
Copy to Clipboard
Note: These top, right, bottom, and left border properties also have mapped logical properties that relate to the writing mode of the document (e.g. left-to-right or right-to-left text, or top-to-bottom). We'll be exploring these in the next lesson, which covers handling different text directions.

There are a variety of styles that you can use for borders. In the example below we have used a different border style for the four sides of my box. Play with the border style, width, and color to see how borders work.


Rounded corners
Rounding corners on a box is achieved by using the border-radius property and associated longhands which relate to each corner of the box. Two lengths or percentages may be used as a value, the first value defining the horizontal radius, and the second the vertical radius. In a lot of cases, you will only pass in one value, which will be used for both.

For example, to make all four corners of a box have a 10px radius:

.box {
  border-radius: 10px;
}
Copy to Clipboard
Or to make the top right corner have a horizontal radius of 1em, and a vertical radius of 10%:

.box {
  border-top-right-radius: 1em 10%;
}