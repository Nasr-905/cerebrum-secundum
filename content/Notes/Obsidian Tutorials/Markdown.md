## Paragraphs are separated by a blank lines.
```
One Paragraph.

Another paragraph.
```
One Paragraph.

Another paragraph.

## White-space collapsing.
```
Multiple          adjacent          spaces



and multiple newlines between paragraphs.
```
Multiple          adjacent          spaces



and multiple newlines between paragraphs.

## Non-breaking spaces/line breaks
- `&nbsp;` (non-breaking space)
- `<br>` (line break)

## Line Breaks
```
line one
line two

line three__  
line four

line five

line six
```
line one
line two

line three  
line four

line five

line six

## Styles

| Style                  | Syntax                 | Example                             | Output                            |
| ---------------------- | ---------------------- | ----------------------------------- | --------------------------------- |
| Bold                   | `** **` or `__ __`     | `**Bold text**`                     | **Bold text**                     |
| Italic                 | `* *` or `_ _`         | `*Italic text*`                     | *Italic text*                     |
| Strikethrough          | `~~ ~~`                | `~~Striked out text~~`              | ~~Striked out text~~              |
| Highlight              | `== ==`                | `==Highlighted text==`              | ==Highlighted text==              |
| Bold and nested italic | `** **` and `_ _`      | `**Bold text and _nested italic_**` | **Bold text and _nested italic_** |
| Bold and italic        | `*** ***` or `___ ___` | `***Bold and italic text***`        | ***Bold and italic text***        |
|                        |                        |                                     |                                   |

## Links
### Internal Links
Wikilink: `[[Three laws of motion]]`
- I've disabled these
Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`
Accepted file formats for internal links
- **Markdown**: `.md`
- **JSON Canvas**: `.canvas` ([Learn more](https://jsoncanvas.org/))
- **Images**: `.avif`, `.bmp`, `.gif`, `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`
- **Audio**: `.flac`, `.m4a`, `.mp3`, `.ogg`, `.wav`, `.webm`, `.3gp`
- **Video**: `.mkv`, `.mov`, `.mp4`, `.ogv`, `.webm`
- **PDF**: `.pdf`
### External Links
[Obsidian Help](https://help.obsidian.md) (`[Obsidian Help](https://help.obsidian.md)`)

#### To other vaults
With [URL encoding](https://en.wikipedia.org/wiki/Percent-encoding):
- `[My Note](obsidian://open?vault=MainVault&file=My%20Note.md)`
Without it
- `[My Note](<obsidian://open?vault=MainVault&file=My Note.md>)`

### Embeds

#### Images
`![Image|widthxheight](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)`

 ![image|widthxheight](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg) 
 
just specifying the width preserves the aspect ratio
#### Audio
`![Anthem](anthem.mp3)`
For Quartz Compatibility: `<audio src="../Obsidian-Tutorials/anthem.mp3" alt="Anthem" controls=""></audio>`

<audio src="../Obsidian-Tutorials/anthem.mp3" alt="Anthem" controls=""></audio>
Doesn't work with external audio

#### PDF
`![W540](https://psref.lenovo.com/syspool/Sys/PDF/withdrawnbook/ThinkPad_W540.pdf)`

![[ThinkPad_W540.pdf#height=200]] 

External PDFs don't work either :(
#### Embed Search Results

```query
Pain
```

#### Embed Webpages
Uses the [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) HTML element
```html
<iframe src="INSERT YOUR URL HERE"></iframe>
```
*Some websites may have specific embed iframe links*
##### Youtube
```md
![](https://www.youtube.com/watch?v=NnTvZWp5Q7o)
```
![](https://www.youtube.com/watch?v=NnTvZWp5Q7o) 

##### Tweets
```
![](https://twitter.com/obsdmd/status/1580548874246443010)
```
![](https://twitter.com/obsdmd/status/1580548874246443010)
### Anchor Links (Headings)
Same note anchor/heading link
```md
[Anchor Links (Headings)](#Anchor%20Links%20(Headings))
```
[Anchor Links (Headings)](#Anchor%20Links%20(Headings))

Other notes Headings
```
[Common Fourier Pairs](The%20Fourier%20Transform.md#Common%20Fourier%20Pairs)
```
[Common Fourier Pairs](The%20Fourier%20Transform.md#Common%20Fourier%20Pairs)

Other Notes Subheadings
```
[Rectangular Function and Sinc](The%20Fourier%20Transform.md#Common%20Fourier%20Pairs#Rectangular%20Function%20and%20Sinc)
```
[Rectangular Function and Sinc](The%20Fourier%20Transform.md#Common%20Fourier%20Pairs#Rectangular%20Function%20and%20Sinc)

#### Linking to blocks of text
This will only work in obsidian.
```
[](Narnia%20-%20Apr%206,%202024.md#^475a03)
```
[Dream Log Block Link](Narnia%20-%20Apr%206,%202024.md#^475a03)  
You could also, name blocks
> "You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day

[Quote by James Clear](#^quote-of-the-day)
## Lists
```md
- First
* Second
+ Third
```
- First
* Second
+ Third

## Task Lists
```md
- [x] This is a completed task.
- [?] Random characters don't get struck through
- [ ] This is an incomplete task.
```
- [x] This is a completed task.
- [?] Random characters don't get struck through
- [ ] This is an incomplete task.

## Horizontal Rule
Any of the following will work
```
***
****
* * *
---
----
- - -
___
____
_ _ _
```
***
## Code Syntax Highlighting
```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
Starting 
```
```{language code} 
```
[Supported Languages](https://prismjs.com/#supported-languages)

## Footnotes
```
This is a simple footnote[^1]

This is one footnote[^2]

This is another footnote[^note]
 
[^1]: This is the referenced text.

[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.

[^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references.

You can also use inline footnotes. ^[This is an inline footnote.]
```
%% This is a simple footnote[^3] %%


%%This is one footnote[^2]%%
This is another footnote[^note]
 
%% [^3]: This is the referenced text. %%


%%[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.%%
%% [^note]: Named footnotes still appear as numbers, but can make it easier to identify and link references. %%
%% You can also use inline footnotes. ^[This is an inline footnote.] %%

Footnotes act weird in Quartz search
## Comments
```
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%
```
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%

## Escaping asterisks and underscores
```
\*\_This line will not be bold or italic\_\*

1\. This won't be a list item.
```
\*\_This line will not be bold or italic\_\*  
- Asterisk: `\*`
- Underscore: `\_`
- Hashtag: `\#`
- Backtick: `` \` ``
- Pipe (used in tables): `\|`
- Tilde: `\~`
- Dash `\-`
- Literal dash `\-`

1\. This won't be a list item.
## Tables
```
| First name                                     | Last name                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Max                                            | Planck                                                                                   |
| Marie                                          | Curie                                                                                    |
| Escape the `|` character<br>when in table mode | ![Engelbar\|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg) |
```

| First name                                       | Last name                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Max                                              | Planck                                                                                       |
| Marie                                            | Curie                                                                                        |
| Escape the pipe character<br>when in table mode. |   ![Engelbar\|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)   |
### Alignment
```
Left-aligned text | Center-aligned text | Right-aligned text
:-- | :--: | --:
Content | Content | Content
```

Left-aligned text | Center-aligned text | Right-aligned text
:-- | :--: | --:
Content | Content | Content
## Diagram 

Use [Mermaid](https://mermaid-js.github.io/) to make [flow charts](https://mermaid.js.org/syntax/flowchart.html), [sequence diagrams](https://mermaid.js.org/syntax/sequenceDiagram.html), and [timelines](https://mermaid.js.org/syntax/timeline.html).

## Aliases
They exist

## Callouts

Unless you [Customize callouts](https://help.obsidian.md/Editing+and+formatting/Callouts#Customize%20callouts), any unsupported type defaults to the `note` type. The type identifier is case-insensitive.

> [!note] Note Title
>```md
> > [!note]
> > Lorem ipsum dolor sit amet
>```

---

> [!abstract]
>
>```md
>> [!abstract]
>> Lorem ipsum dolor sit amet
>```

Aliases: `summary`, `tldr`

---

> [!info]
>
>```md
>> [!info]
>> Lorem ipsum dolor sit amet
>```

---

> [!todo]
>
>```md
>> [!todo]
>> Lorem ipsum dolor sit amet
>```

---

> [!tip]
>
>```md
>> [!tip]
>> Lorem ipsum dolor sit amet
>```

Aliases: `hint`, `important`

---

> [!success]
>
>```md
>> [!success]
>> Lorem ipsum dolor sit amet
>```

Aliases: `check`, `done`

---

> [!question]
>
>```md
>> [!question]
>> Lorem ipsum dolor sit amet
>```

Aliases: `help`, `faq`

---

> [!warning]
>
>```md
>> [!warning]
>> Lorem ipsum dolor sit amet
>```

Aliases: `caution`, `attention`

---

> [!failure]
>
>```md
>> [!failure]
>> Lorem ipsum dolor sit amet
>```

Aliases: `fail`, `missing`

---

> [!danger]
>
>```md
>> [!danger]
>> Lorem ipsum dolor sit amet
>```

Alias: `error`

---

> [!bug]
>
>```md
>> [!bug]
>> Lorem ipsum dolor sit amet
>```

---

> [!example]
>
>```md
>> [!example]
>> Lorem ipsum dolor sit amet
>```

---

> [!quote]
>
>```md
>> [!quote]
>> Lorem ipsum dolor sit amet
>```

Alias: `cite`

## Properties
### Property types
- Text
- List
- Number
- Checkbox
- Date
- Date & time

### Internal Links in Text and Lists
You need quotation marks
```yaml
---
link: "[[Link]]" 
linklist: 
  - "[[Link]]" 
  - "[[Link2]]"
---
```
### Date and Date & Time Type Properties
```yaml
---
date: 2020-08-21
time: 2020-08-21T10:30:00
---
```
### Default properties 

| Property     | Description                                              |
| ------------ | -------------------------------------------------------- |
| `tags`       | See Tags                                                 |
| `aliases`    | See [Aliases](#Aliases)                                  |
| `cssclasses` | Allows you to style individual notes using CSS snippets. |
