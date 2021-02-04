# Markdown Starter Worksheet
The main goal of markdown is to be easily written and easily read. It uses "plain text" formatting and can be converted to HTML. The most common use case I've come across to use markdown is for ReadMe files, used, for example, for Github repos. Markdown can also be used to create email.

Markdown, in comparison to HTML, is much simpler to read and write. The average person can typically understand markdown and would be able to learn and write it much quicker than HTML.

Specifically, Visual Studio Code uses the [CommonMark](http://commonmark.org/) markdown specification.

## Sections
- [Headers](#headers)
- [Quotes](#quotes)
- [Emphasis](#emphasis)
- [Horizontal Rule](#horizontal-rule)
- [Lists](#lists)
- [Links](#links)
- [Images](#images)
- [Code](#code)
- [Tables](#tables)
- [Custom HTML](#custom-html)
- [Custom CSS](#custom-css)
- [Additional Resources](#additional-resources)

---

## Headers

Headers are defined by the '#' symbol. One '#' for H1, two for H2, etc.

# Header 1

## Header 2

### Header 3

#### Header 4

---

## Quotes

Quotes are defined by the '>' symbol.

> This is a quote.

You can combine a header with a quote.

> ## This is a H2 quote

---

## Emphasis

Add emphasis with asterisks '*' and underscores '_'. 
Two before and after (no spaces) a section of texts makes it bold.

**Bold text with asterisks.**

__Bold text with underscores.__

One before and after (no spaces) a section of text makes it bold.

*Italicized text with asterisks.*

_Italicized text with underscores._

You can also put Bold and Italicized text inline by Surrounding a group of words.

This text is **bold** and this text is _italicized_.

---

## Horizontal Rule

A horizontal rules give a visible line break. You can create one by putting three or more hyphens, asterisks, or underscores (-, *, _).

---

## Lists

Create unordered lists using '-', '*', '+'.

- Item 1
- Item 2
- Item 3

You can create sub lists with indenting.

- Item 1
- Item 2
  - Sub Item 1

1. Item 1
2. Item 2
3. Item 3

---

# Links

Create a link by surrounding it with angle brackets.

<http://google.com>

Create a link with text by surrounding text with brackets, [], and link immediately following the parenthesis ().

[Google](http://google.com)

What if you needed to reuse a link several times? Well, you could copy and paste that link each time. That means, if you need to update the link, you will have to do it each time its used. There's a better way!

Create reference style link by defining your link with a 'key' inside of brackets, colon, space, and the link

[key]:(http://youtube.com)

Then use the reference style link by using your text inside of brackets followed by the link 'key' inside of brackets.

[YouTube][key]

You can link to other locations on your markdown page. Remember, your markdown will get converted to HTML. So you can, in theory, use an anchor tag to lnk to an element with a specific ID. You can find an example of this in the list of sections at the top of this document.

When we create a header tag for example, it implicitly creates an id property.

Ex. `# Header` becomes `<h1 id="header">Header</h1>`

Names wil be converted to ids by replacing spaces with hyphens and uppercase letters with lowercase letters (think css naming convention)

Ex. `Header Info` becomes `header-info`

---

# Images

Defining an image is similar to defining a link, except you prefix it with '!'.

![Shaquille O'Neal](https://pbs.twimg.com/media/DAKIXNLUAAE-rEo.jpg)

Just like links, you can define images by reference in the same format.

Define the reference.

[profile]:(https://pbs.twimg.com/media/DAKIXNLUAAE-rEo.jpg)

Use the reference.

![Shaquille O'Neal][profile]

---

## Code

You can do inline code with `back ticks` (``).

`<h1 id="header">Header</h1>`

You can do blocks of code by surrounding it with 3 back ticks (``` ```).

```
   const num1 = 0;
   const num2 = 1;
```

The above does not give language specific highlighting. You can specify the programming language immediately following the opening 3 back ticks.  You should see a difference in the highlighting!

```javascript
   const num1 = 0;
   const num2 = 1;
```

---

## Tables

Tables are useful for displaying rows and columns of data. Column headers can be defined in between pipes (|). Headers are separated from table content with a frow of dashes (-) (still separated by pipes), and there must be at least 3 dashes between each header. The row data follows beneath (still separated by pipes).

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| A1       | B1       | C1       |
| A2       | B2       | C2       |

The column definitions and row definitions do not have to have the exact same width size, but it would be much more readable. Notice the output of the following two tables are the same, but the second (raw markdown) is much more readable.

| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| A1 | B1 | C1 |
| A2 | B2 | C2 |

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| A1       | B1       | C1       |
| A2       | B2       | C2       |


You can also align (center, left, right) the text in a column by using colons (:) in the line breaks between headers and rows. No colon mens the default **left alignment**. Colons on each side signifies **center alignment** and a trailing colon means **right alignment**.

| Header 1 | Header 2 | Header 3 |
| -------- | :------: | -------: |
| A1       | B1       | C1       |
| A2       | B2       | C2       |

---
 
## Custom HTML

Since markdown get automatically converted to HTML, you can add raw HTML directly to your markdown.

```html
   <p>Sample HTML paragraph.</p>
```

Creates this:

<p>Sample HTML paragraph.</p>

---

## Custom CSS

You can also add custom CSS to your markdown to add additional styling to your document. You can also include CSS by including a style tag.

```html
   <style>
      body {
         color: green;
      }
   </style>
```

<style>
   body {
      color: #ffffff;
      background-color: #3700b3;
   }

   a {
      color: #03dac5;
   }
</style>

---

## Additional Resources
- [Markdown Cheat Sheet - Adam P on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images)
- [Daring Fireball Markdown Syntax](https://daringfireball.net/projects/markdown/syntax)
- [Markdown in Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown)
