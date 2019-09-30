# Title

### Subtitle

# Heading 1
This paragraph belongs to heading 1.

## Heading 2
This paragraph belongs to heading 2.

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6


## Some **bold** and <u>underlined</u> text with `code` in heading.
This paragraph has **bold** or _italic_ or <u>underlined</u> text.

This paragraph has **_bold-italic_**, _<u>underlined-italic</u>_ and **<u>underlined-bold</u>** text.

This paragraph has `code` and [links](https://www.adobe.com).

A bold **paragraph with   
manual** breaks.

What happens if **bold spawns** 

**several paragraphs?**

This has even more formatting like <del>strikethrough</del> and some<sub>supscript</sub> and<sup>superscript</sup>.

See different monospace fonts: `courier` or `Roboto Mono Bold` or maybe `Source Code Pro`. 

Let’s see if spaces after **bold**     are correctly handled. Also **bold**   _italic_  switcherroos. And spaces       **before bold** text?

What about **bold_italicbold**italic_ switches?

Here’s some example code:



```
async function getFile(drive, parentId, name, isFolder) {
  const query = [
    `'${parentId}' in parents`,
    `and name = ${JSON.stringify(name)}`,
    'and trashed=false',
    `and mimeType ${isFolder ? '=' : '!='} }
```

And some code with soft breaks




```
            // first, turn styles off that are not in text style
            for (let i = currentStyles.length - 1; i >= 0; i -= 1) {
              const s = currentStyles[i];
              if (!ts[s.name]) {
                md += s.off;
                currentStyles.splice(i, 1);
              }
            }
```

### And a one liner:


`$ npm install`

Should work. And then `code at the end`  
Before a soft break and at the end

Of a `paragraph.`

Here code with soft breaks and **formatting:**  
```
$ npm install

$ cd …
```  
<u>And</u> it continues….

Here code with soft breaks only two lines  
```
$ npm install
$ cd …
```  
<u>And</u> it continues….

And `code that changes code font`.



Page Break:

---



Section Break (next page):

---


Section Break (continous):

---


Horizontal Line:

---



Empty Heading:


Empty Bold Heading:


Empty heading with image:

## ![HappyAlt](https://lh6.googleusercontent.com/143NaFNC654bp-sOg_ppEDyQHB2wB5fElFNVa_6jKG1HB8iqwIeRFge63Ge5PINPOlHw15jpMoDDRwpEOVaxQeRI5cm-g0ztg6PbzmtWF8Ztd4WxMowILQFBrTIfBxuLYlXwTDuwIRoP7vnBCg) 
Empty heading with hr



---


Empty heading with section break



---

Empty Heading with page break



---



## Heading with  <br>Soft Breaks

## Then numbered lists:

1. First install the dependencies:  
`$ npm install`
1. Bar **bold**
1. Trello
    1. Apple
    1. Oranges
    1. Lemons
        1. Roman
        1. Greek  
Muiltiline  
With `code`.
        1. Spanish



## And unordered lists:

- Todo
- And so more
- Should do the trick
    - Nested 1
    - Nested 2
- Mixed with ordered
1. One
1. Two
1. Three

### Special List

1. `Codeline`
1. `More code`
1. `Some more code`

## All List Types

1. One
1. Two
1. Three
1. Four
1. Five
1. Six
- Seven
- Eight
- Nine
- Ten
- Eleven
- Twelfe

### **Demos**
You can watch the entire recording here

1. Server timing & DOM based HTL engine
1. Helix Pages & auto-generated sequence diagrams
1. Performance analysis of Helix OpenWhisk actions
1. Authoring user journey
1. Dev experience: Helix 6 months ago and today





## Let’s try a simple table

|a0 |b0 |c0 |d0 |
|---|---|---|---|
|a1 |b1 |c1 |d1 |
|a2 |b2 |c2 |d2 |

## And a more complex table

|**Country** |**Abbrev** |**Amount** |**Example** |
|----------|:----------:|----------:|----------|
|Switzerland |CH |5 |`const a=1; let b=5;`|
|USA |US |2.5 |_n/a -_ or ![HappyAlt](https://lh6.googleusercontent.com/143NaFNC654bp-sOg_ppEDyQHB2wB5fElFNVa_6jKG1HB8iqwIeRFge63Ge5PINPOlHw15jpMoDDRwpEOVaxQeRI5cm-g0ztg6PbzmtWF8Ztd4WxMowILQFBrTIfBxuLYlXwTDuwIRoP7vnBCg)  |
|Japan |JP |3.14 |`Math.PI;`|

## Table with lists
Totally useless...

|List |Comment |
|-----|--------|
| 1. Apple 1. Banana 1. Orange |fruits |
| - Car - Airplane - Ship |transportation |



---



# Inline Images
Here is a simple ![HappyAlt](https://lh6.googleusercontent.com/143NaFNC654bp-sOg_ppEDyQHB2wB5fElFNVa_6jKG1HB8iqwIeRFge63Ge5PINPOlHw15jpMoDDRwpEOVaxQeRI5cm-g0ztg6PbzmtWF8Ztd4WxMowILQFBrTIfBxuLYlXwTDuwIRoP7vnBCg) happy face!



![HappyAlt](https://lh6.googleusercontent.com/143NaFNC654bp-sOg_ppEDyQHB2wB5fElFNVa_6jKG1HB8iqwIeRFge63Ge5PINPOlHw15jpMoDDRwpEOVaxQeRI5cm-g0ztg6PbzmtWF8Ztd4WxMowILQFBrTIfBxuLYlXwTDuwIRoP7vnBCg) 

# ![HappyAlt](https://lh6.googleusercontent.com/143NaFNC654bp-sOg_ppEDyQHB2wB5fElFNVa_6jKG1HB8iqwIeRFge63Ge5PINPOlHw15jpMoDDRwpEOVaxQeRI5cm-g0ztg6PbzmtWF8Ztd4WxMowILQFBrTIfBxuLYlXwTDuwIRoP7vnBCg) This is heading after image

# This is heading ![HappyAlt](https://lh6.googleusercontent.com/143NaFNC654bp-sOg_ppEDyQHB2wB5fElFNVa_6jKG1HB8iqwIeRFge63Ge5PINPOlHw15jpMoDDRwpEOVaxQeRI5cm-g0ztg6PbzmtWF8Ztd4WxMowILQFBrTIfBxuLYlXwTDuwIRoP7vnBCg)  with image.


1. ![](https://lh6.googleusercontent.com/143NaFNC654bp-sOg_ppEDyQHB2wB5fElFNVa_6jKG1HB8iqwIeRFge63Ge5PINPOlHw15jpMoDDRwpEOVaxQeRI5cm-g0ztg6PbzmtWF8Ztd4WxMowILQFBrTIfBxuLYlXwTDuwIRoP7vnBCg) 
1. ![HappyAlt](https://lh6.googleusercontent.com/143NaFNC654bp-sOg_ppEDyQHB2wB5fElFNVa_6jKG1HB8iqwIeRFge63Ge5PINPOlHw15jpMoDDRwpEOVaxQeRI5cm-g0ztg6PbzmtWF8Ztd4WxMowILQFBrTIfBxuLYlXwTDuwIRoP7vnBCg) 

## Final Code
```
/**
 * Main function
 * @param params Action params
 * @returns {Promise<*>} The response
 */
async function run(params) {
  const disclosed = { ...params };
  Object.keys(disclosed).forEach((key) => {
    if (key.match(/^[A-Z0-9_]+$/)) {
      delete disclosed[key];
    }
  });
  log.trace('%s', JSON.stringify(disclosed));

  return fetchViaDoclet(params);
}
```
