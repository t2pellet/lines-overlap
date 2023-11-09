## Setup

This was made with:
- npm v8.19.4
- node v16.20.2

## Install

1: `yarn install`

2: `yarn build`

## Run

`yarn start`
<br/>
or
<br/>
`node overlap`

### Expects args:

<line_1>: (x1,x2)
<br />
<line_2>: (x3,x4)

e.g. `node overlap "(3,5)" "(4,7)"`

Outputs `true` or `false` based on overlap

Note : (3, 6) and (6, 9) are considered to overlap in this implementation

### Accepted Formats

Accepts (x1,x2)

Can omit parentheses and put space around comma

x1,x2 must be numeric, can be decimal