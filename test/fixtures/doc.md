# Heading 1

This paragraph belongs to heading 1\.

## Heading 2

This paragraph belongs to heading 2\.

### Heading 3

#### Heading 4

##### Heading 5

###### *Heading 6*

  
Some __bold __and underlined text with code in heading\.

This paragraph has __bold__ or *italic* or underlined text\.

This paragraph has __*bold\-italic*__, *underlined\-italic* and __underlined\-bold__ text\.

This paragraph has code and [links](https://www.adobe.com/)\.

A bold __paragraph with __  
__manual__ breaks\.

What happens if __bold spawns __

__several paragraphs?__

This has even more formatting like strikethrough and somesupscript andsuperscript\.

See different monospace fonts: courier or __Roboto Mono Bold__ or maybe Source Code Pro\. 

Let’s see if spaces after __bold     __are correctly handled\. Also __bold   __*italic  *switcherroos\. And spaces __      before bold__ text?

What about __bold*italicbold*__*italic* switches?

Here’s some example code:

async function getFile\(drive, parentId, name, isFolder\) \{  const query = \[    \`'$\{parentId\}' in parents\`,    \`and name = $\{JSON\.stringify\(name\)\}\`,    'and trashed=false',    \`and mimeType $\{isFolder ? '=' : '\!='\} \}  


And some code with soft breaks

  


       // first, turn styles off that are not in text style  
       for \(let i = currentStyles\.length \- 1; i >= 0; i \-= 1\) \{  
          const s = currentStyles\[i\];  
          if \(\!ts\[s\.name\]\) \{  
            md \+= s\.off;  
            currentStyles\.splice\(i, 1\);  
          \}  
       \}

### And a one liner:

  


$ npm install

  


Should work\. And then code at the end  
Before a soft break and at the end

Of a paragraph\.

Here code with soft breaks and __formatting:__  
$ npm install  
  
$ cd …  
__And__ it continues…\.Here code with soft breaks only two lines  
$ npm install  
$ cd …  
And it continues…\.And code that changes code font\.

  


Page Break:

Section Break \(next page\):  


Section Break \(continous\):  


Horizontal Line:

  


Empty Heading:

  


Empty Bold Heading:

  


Empty heading with image:

## ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEYElEQVRYCc1XTWwbVRD+xk2TOEnbpGl+nKQgb2gRUiERAqQEUomcuKAeQlsEEuIWIzUitMChB6hAPYAohYJEnAM/ByDpD1E5UAkBEj8tXBBpSxFt7U3auk7zR5w4tmM79qC3a693189uJBKVd9k3M9/8eN68eWPgDi9aqX/m3eswtvlRMHaB0QmCAqAmoz8HhgrQWTjoNNwz54hOpFZi+7YB8I2XnEhEXgQc+wGuW4lRAFNgOoIy5we09WismE7RAFj17AHzuwCaixkpIrsBwn5SvCcLYaQBMIOgel4H+DUAUkwhgxI+A3gbiusg0aG0XZ5nnPmQA/6JL0HYYwf/J5owDLfrGXsQjjyj6q3Dq+5cOGHshT/4ht2fJQOZMx+2g1aRZoB2U+vAqaxNIwC92qOXAWzNCtfoexNO3k5Ng1FhP3cEiWh/IeexpWVMz8bALOqp+BKYqZkYlpaWCwGbEXXsywq1DGhNRq2dkN3zn84FMfzVVSynGHe3bEBf7wPYULU+q2/5hheTOOY9j+uBRZSsI+zt2YadHU0WTIaYhPJPs2hWegbGqx+TOQ8vJjB0SncuFK8Fwjjz3TWZQY33zbfjmnNBiICHTl6FCEqyGqDWdAi+HkCadklACM3HkUpb0z4zuySDarzZubhFJnRD8wXwrPvM1AB1WjQzhKuhEvVbnBZR+/1bLLSZaNtRayZRX+eEq7HKwjMI0n2W6AxSxEW1r5ISB/pfaMPXZ8YRWojjofZ6dDzcaIcZdOcjLi1jv49Oo2ZTKZ58wq3VggGwbLhVkHoR+ntF7kot8rUn4tTqLc9dw7V3KPWQrYF5qXRtmSFhXg+A2S/zdXzEh0hUeo1k8Dye0P38xJVCDcyXC0BMMpJ181YEg5/9hWQy7xWVoK2sZDIF7yeX4FNDIDI6vgnEmk89A2KMkqzurmb8fWUOx7wXsLCQkCDkLNE/3vdexGVfCN07W+QgZs2nqRVvDgKot6MHPr6EPy5Oo6KiBN1dLRB9oKWpCvYfJZ6JQDCM0Quz+OHnAKKxZbS6N+GVvnZZBiahuJrEbGDkhn2eV0H8lj2AeCKF9z46D3V8wRBVVa5HTXU5Kiv1NhKJLGMutITFSK5eRBM7sK9d/m4Qv0zK4BFhMBfA2PPlSJeJ5/guw1NmI85zeMSPX36bKFRQFpUH2+rw3NP3wlme6XMWKQIordieHVaNAASG1d6nwDhuDsysK165738MYPTPmbzntqzMgR331eLxrmZsU6rNauY9g6mH7hkYyTItAQgm+zyHQXwwC5B9xZs/ORXDfDgBTjM2bixDY70TDkeeOas60ZukDIhB11h5GtpQOjbxhTbDGbDV2PAQlKZn7UNpXgDC1R0dy82/lf2eHoCPFhrVzNgC++tg6jefuR0nzYAZxOJ2pEr7QHQAQINZVmQ/CcI7oPiH5P60wESia982gKwTrTbUYCfEJKMNE9p7nvtzCvKD+CzSdBqtjb/azzpr53/3/Rd8mZtgZ2vfuAAAAABJRU5ErkJggg==)

Empty heading with hr

##   


Empty heading with section break

  
  


Empty Heading with page break

## Heading with  
Soft Breaks

## Then numbered lists:

1. First install the dependencies:  
$ npm install
2. Bar __bold__
3. Trello
	1. Apple
	2. Oranges
	3. Lemons
		1. Roman
		2. Greek  
Muiltiline  
With code\.
		3. Spanish

  


## And unordered lists:

- Todo
- And so more
- Should do the trick
	- Nested 1
	- Nested 2
- Mixed with ordered

1. One
2. Two
3. Three

### Special List

1. Codeline
2. More code
3. Some more code

## All List Types

1. One
2. Two
3. Three
4. Four
5. Five
6. Six

- Seven
- Eight
- Nine
- Ten
- Eleven
- Twelfe

### Demos

You can watch the entire recording here

1. Server timing & DOM based HTL engine
2. Helix Pages & auto\-generated sequence diagrams
3. Performance analysis of Helix OpenWhisk actions
4. Authoring user journey
5. Dev experience: Helix 6 months ago and today

  
  


## Let’s try a simple table

  


a0

b0

c0

d0

a1

b1

c1

d1

a2

b2

c2

d2

## And a more complex table

  


__Country__

__Abbrev__

__Amount__

__Example__

Switzerland

CH

5

const a=1;  
let b=5;

USA

US

2\.5

*n/a \- *or* *![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEYElEQVRYCc1XTWwbVRD+xk2TOEnbpGl+nKQgb2gRUiERAqQEUomcuKAeQlsEEuIWIzUitMChB6hAPYAohYJEnAM/ByDpD1E5UAkBEj8tXBBpSxFt7U3auk7zR5w4tmM79qC3a693189uJBKVd9k3M9/8eN68eWPgDi9aqX/m3eswtvlRMHaB0QmCAqAmoz8HhgrQWTjoNNwz54hOpFZi+7YB8I2XnEhEXgQc+wGuW4lRAFNgOoIy5we09WismE7RAFj17AHzuwCaixkpIrsBwn5SvCcLYaQBMIOgel4H+DUAUkwhgxI+A3gbiusg0aG0XZ5nnPmQA/6JL0HYYwf/J5owDLfrGXsQjjyj6q3Dq+5cOGHshT/4ht2fJQOZMx+2g1aRZoB2U+vAqaxNIwC92qOXAWzNCtfoexNO3k5Ng1FhP3cEiWh/IeexpWVMz8bALOqp+BKYqZkYlpaWCwGbEXXsywq1DGhNRq2dkN3zn84FMfzVVSynGHe3bEBf7wPYULU+q2/5hheTOOY9j+uBRZSsI+zt2YadHU0WTIaYhPJPs2hWegbGqx+TOQ8vJjB0SncuFK8Fwjjz3TWZQY33zbfjmnNBiICHTl6FCEqyGqDWdAi+HkCadklACM3HkUpb0z4zuySDarzZubhFJnRD8wXwrPvM1AB1WjQzhKuhEvVbnBZR+/1bLLSZaNtRayZRX+eEq7HKwjMI0n2W6AxSxEW1r5ISB/pfaMPXZ8YRWojjofZ6dDzcaIcZdOcjLi1jv49Oo2ZTKZ58wq3VggGwbLhVkHoR+ntF7kot8rUn4tTqLc9dw7V3KPWQrYF5qXRtmSFhXg+A2S/zdXzEh0hUeo1k8Dye0P38xJVCDcyXC0BMMpJ181YEg5/9hWQy7xWVoK2sZDIF7yeX4FNDIDI6vgnEmk89A2KMkqzurmb8fWUOx7wXsLCQkCDkLNE/3vdexGVfCN07W+QgZs2nqRVvDgKot6MHPr6EPy5Oo6KiBN1dLRB9oKWpCvYfJZ6JQDCM0Quz+OHnAKKxZbS6N+GVvnZZBiahuJrEbGDkhn2eV0H8lj2AeCKF9z46D3V8wRBVVa5HTXU5Kiv1NhKJLGMutITFSK5eRBM7sK9d/m4Qv0zK4BFhMBfA2PPlSJeJ5/guw1NmI85zeMSPX36bKFRQFpUH2+rw3NP3wlme6XMWKQIordieHVaNAASG1d6nwDhuDsysK165738MYPTPmbzntqzMgR331eLxrmZsU6rNauY9g6mH7hkYyTItAQgm+zyHQXwwC5B9xZs/ORXDfDgBTjM2bixDY70TDkeeOas60ZukDIhB11h5GtpQOjbxhTbDGbDV2PAQlKZn7UNpXgDC1R0dy82/lf2eHoCPFhrVzNgC++tg6jefuR0nzYAZxOJ2pEr7QHQAQINZVmQ/CcI7oPiH5P60wESia982gKwTrTbUYCfEJKMNE9p7nvtzCvKD+CzSdBqtjb/azzpr53/3/Rd8mZtgZ2vfuAAAAABJRU5ErkJggg==)

Japan

JP

3\.14

Math\.PI;

## Table with lists

Totally useless\.\.\.

List

Comment

1. Apple
2. Banana
3. Orange

fruits

- Car
- Airplane
- Ship

transportation

# Inline Images

Here is a simple ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEYElEQVRYCc1XTWwbVRD+xk2TOEnbpGl+nKQgb2gRUiERAqQEUomcuKAeQlsEEuIWIzUitMChB6hAPYAohYJEnAM/ByDpD1E5UAkBEj8tXBBpSxFt7U3auk7zR5w4tmM79qC3a693189uJBKVd9k3M9/8eN68eWPgDi9aqX/m3eswtvlRMHaB0QmCAqAmoz8HhgrQWTjoNNwz54hOpFZi+7YB8I2XnEhEXgQc+wGuW4lRAFNgOoIy5we09WismE7RAFj17AHzuwCaixkpIrsBwn5SvCcLYaQBMIOgel4H+DUAUkwhgxI+A3gbiusg0aG0XZ5nnPmQA/6JL0HYYwf/J5owDLfrGXsQjjyj6q3Dq+5cOGHshT/4ht2fJQOZMx+2g1aRZoB2U+vAqaxNIwC92qOXAWzNCtfoexNO3k5Ng1FhP3cEiWh/IeexpWVMz8bALOqp+BKYqZkYlpaWCwGbEXXsywq1DGhNRq2dkN3zn84FMfzVVSynGHe3bEBf7wPYULU+q2/5hheTOOY9j+uBRZSsI+zt2YadHU0WTIaYhPJPs2hWegbGqx+TOQ8vJjB0SncuFK8Fwjjz3TWZQY33zbfjmnNBiICHTl6FCEqyGqDWdAi+HkCadklACM3HkUpb0z4zuySDarzZubhFJnRD8wXwrPvM1AB1WjQzhKuhEvVbnBZR+/1bLLSZaNtRayZRX+eEq7HKwjMI0n2W6AxSxEW1r5ISB/pfaMPXZ8YRWojjofZ6dDzcaIcZdOcjLi1jv49Oo2ZTKZ58wq3VggGwbLhVkHoR+ntF7kot8rUn4tTqLc9dw7V3KPWQrYF5qXRtmSFhXg+A2S/zdXzEh0hUeo1k8Dye0P38xJVCDcyXC0BMMpJ181YEg5/9hWQy7xWVoK2sZDIF7yeX4FNDIDI6vgnEmk89A2KMkqzurmb8fWUOx7wXsLCQkCDkLNE/3vdexGVfCN07W+QgZs2nqRVvDgKot6MHPr6EPy5Oo6KiBN1dLRB9oKWpCvYfJZ6JQDCM0Quz+OHnAKKxZbS6N+GVvnZZBiahuJrEbGDkhn2eV0H8lj2AeCKF9z46D3V8wRBVVa5HTXU5Kiv1NhKJLGMutITFSK5eRBM7sK9d/m4Qv0zK4BFhMBfA2PPlSJeJ5/guw1NmI85zeMSPX36bKFRQFpUH2+rw3NP3wlme6XMWKQIordieHVaNAASG1d6nwDhuDsysK165738MYPTPmbzntqzMgR331eLxrmZsU6rNauY9g6mH7hkYyTItAQgm+zyHQXwwC5B9xZs/ORXDfDgBTjM2bixDY70TDkeeOas60ZukDIhB11h5GtpQOjbxhTbDGbDV2PAQlKZn7UNpXgDC1R0dy82/lf2eHoCPFhrVzNgC++tg6jefuR0nzYAZxOJ2pEr7QHQAQINZVmQ/CcI7oPiH5P60wESia982gKwTrTbUYCfEJKMNE9p7nvtzCvKD+CzSdBqtjb/azzpr53/3/Rd8mZtgZ2vfuAAAAABJRU5ErkJggg==)happy face\!

  


![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEYElEQVRYCc1XTWwbVRD+xk2TOEnbpGl+nKQgb2gRUiERAqQEUomcuKAeQlsEEuIWIzUitMChB6hAPYAohYJEnAM/ByDpD1E5UAkBEj8tXBBpSxFt7U3auk7zR5w4tmM79qC3a693189uJBKVd9k3M9/8eN68eWPgDi9aqX/m3eswtvlRMHaB0QmCAqAmoz8HhgrQWTjoNNwz54hOpFZi+7YB8I2XnEhEXgQc+wGuW4lRAFNgOoIy5we09WismE7RAFj17AHzuwCaixkpIrsBwn5SvCcLYaQBMIOgel4H+DUAUkwhgxI+A3gbiusg0aG0XZ5nnPmQA/6JL0HYYwf/J5owDLfrGXsQjjyj6q3Dq+5cOGHshT/4ht2fJQOZMx+2g1aRZoB2U+vAqaxNIwC92qOXAWzNCtfoexNO3k5Ng1FhP3cEiWh/IeexpWVMz8bALOqp+BKYqZkYlpaWCwGbEXXsywq1DGhNRq2dkN3zn84FMfzVVSynGHe3bEBf7wPYULU+q2/5hheTOOY9j+uBRZSsI+zt2YadHU0WTIaYhPJPs2hWegbGqx+TOQ8vJjB0SncuFK8Fwjjz3TWZQY33zbfjmnNBiICHTl6FCEqyGqDWdAi+HkCadklACM3HkUpb0z4zuySDarzZubhFJnRD8wXwrPvM1AB1WjQzhKuhEvVbnBZR+/1bLLSZaNtRayZRX+eEq7HKwjMI0n2W6AxSxEW1r5ISB/pfaMPXZ8YRWojjofZ6dDzcaIcZdOcjLi1jv49Oo2ZTKZ58wq3VggGwbLhVkHoR+ntF7kot8rUn4tTqLc9dw7V3KPWQrYF5qXRtmSFhXg+A2S/zdXzEh0hUeo1k8Dye0P38xJVCDcyXC0BMMpJ181YEg5/9hWQy7xWVoK2sZDIF7yeX4FNDIDI6vgnEmk89A2KMkqzurmb8fWUOx7wXsLCQkCDkLNE/3vdexGVfCN07W+QgZs2nqRVvDgKot6MHPr6EPy5Oo6KiBN1dLRB9oKWpCvYfJZ6JQDCM0Quz+OHnAKKxZbS6N+GVvnZZBiahuJrEbGDkhn2eV0H8lj2AeCKF9z46D3V8wRBVVa5HTXU5Kiv1NhKJLGMutITFSK5eRBM7sK9d/m4Qv0zK4BFhMBfA2PPlSJeJ5/guw1NmI85zeMSPX36bKFRQFpUH2+rw3NP3wlme6XMWKQIordieHVaNAASG1d6nwDhuDsysK165738MYPTPmbzntqzMgR331eLxrmZsU6rNauY9g6mH7hkYyTItAQgm+zyHQXwwC5B9xZs/ORXDfDgBTjM2bixDY70TDkeeOas60ZukDIhB11h5GtpQOjbxhTbDGbDV2PAQlKZn7UNpXgDC1R0dy82/lf2eHoCPFhrVzNgC++tg6jefuR0nzYAZxOJ2pEr7QHQAQINZVmQ/CcI7oPiH5P60wESia982gKwTrTbUYCfEJKMNE9p7nvtzCvKD+CzSdBqtjb/azzpr53/3/Rd8mZtgZ2vfuAAAAABJRU5ErkJggg==)

# ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEYElEQVRYCc1XTWwbVRD+xk2TOEnbpGl+nKQgb2gRUiERAqQEUomcuKAeQlsEEuIWIzUitMChB6hAPYAohYJEnAM/ByDpD1E5UAkBEj8tXBBpSxFt7U3auk7zR5w4tmM79qC3a693189uJBKVd9k3M9/8eN68eWPgDi9aqX/m3eswtvlRMHaB0QmCAqAmoz8HhgrQWTjoNNwz54hOpFZi+7YB8I2XnEhEXgQc+wGuW4lRAFNgOoIy5we09WismE7RAFj17AHzuwCaixkpIrsBwn5SvCcLYaQBMIOgel4H+DUAUkwhgxI+A3gbiusg0aG0XZ5nnPmQA/6JL0HYYwf/J5owDLfrGXsQjjyj6q3Dq+5cOGHshT/4ht2fJQOZMx+2g1aRZoB2U+vAqaxNIwC92qOXAWzNCtfoexNO3k5Ng1FhP3cEiWh/IeexpWVMz8bALOqp+BKYqZkYlpaWCwGbEXXsywq1DGhNRq2dkN3zn84FMfzVVSynGHe3bEBf7wPYULU+q2/5hheTOOY9j+uBRZSsI+zt2YadHU0WTIaYhPJPs2hWegbGqx+TOQ8vJjB0SncuFK8Fwjjz3TWZQY33zbfjmnNBiICHTl6FCEqyGqDWdAi+HkCadklACM3HkUpb0z4zuySDarzZubhFJnRD8wXwrPvM1AB1WjQzhKuhEvVbnBZR+/1bLLSZaNtRayZRX+eEq7HKwjMI0n2W6AxSxEW1r5ISB/pfaMPXZ8YRWojjofZ6dDzcaIcZdOcjLi1jv49Oo2ZTKZ58wq3VggGwbLhVkHoR+ntF7kot8rUn4tTqLc9dw7V3KPWQrYF5qXRtmSFhXg+A2S/zdXzEh0hUeo1k8Dye0P38xJVCDcyXC0BMMpJ181YEg5/9hWQy7xWVoK2sZDIF7yeX4FNDIDI6vgnEmk89A2KMkqzurmb8fWUOx7wXsLCQkCDkLNE/3vdexGVfCN07W+QgZs2nqRVvDgKot6MHPr6EPy5Oo6KiBN1dLRB9oKWpCvYfJZ6JQDCM0Quz+OHnAKKxZbS6N+GVvnZZBiahuJrEbGDkhn2eV0H8lj2AeCKF9z46D3V8wRBVVa5HTXU5Kiv1NhKJLGMutITFSK5eRBM7sK9d/m4Qv0zK4BFhMBfA2PPlSJeJ5/guw1NmI85zeMSPX36bKFRQFpUH2+rw3NP3wlme6XMWKQIordieHVaNAASG1d6nwDhuDsysK165738MYPTPmbzntqzMgR331eLxrmZsU6rNauY9g6mH7hkYyTItAQgm+zyHQXwwC5B9xZs/ORXDfDgBTjM2bixDY70TDkeeOas60ZukDIhB11h5GtpQOjbxhTbDGbDV2PAQlKZn7UNpXgDC1R0dy82/lf2eHoCPFhrVzNgC++tg6jefuR0nzYAZxOJ2pEr7QHQAQINZVmQ/CcI7oPiH5P60wESia982gKwTrTbUYCfEJKMNE9p7nvtzCvKD+CzSdBqtjb/azzpr53/3/Rd8mZtgZ2vfuAAAAABJRU5ErkJggg==)This is heading after image

# This is heading ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEYElEQVRYCc1XTWwbVRD+xk2TOEnbpGl+nKQgb2gRUiERAqQEUomcuKAeQlsEEuIWIzUitMChB6hAPYAohYJEnAM/ByDpD1E5UAkBEj8tXBBpSxFt7U3auk7zR5w4tmM79qC3a693189uJBKVd9k3M9/8eN68eWPgDi9aqX/m3eswtvlRMHaB0QmCAqAmoz8HhgrQWTjoNNwz54hOpFZi+7YB8I2XnEhEXgQc+wGuW4lRAFNgOoIy5we09WismE7RAFj17AHzuwCaixkpIrsBwn5SvCcLYaQBMIOgel4H+DUAUkwhgxI+A3gbiusg0aG0XZ5nnPmQA/6JL0HYYwf/J5owDLfrGXsQjjyj6q3Dq+5cOGHshT/4ht2fJQOZMx+2g1aRZoB2U+vAqaxNIwC92qOXAWzNCtfoexNO3k5Ng1FhP3cEiWh/IeexpWVMz8bALOqp+BKYqZkYlpaWCwGbEXXsywq1DGhNRq2dkN3zn84FMfzVVSynGHe3bEBf7wPYULU+q2/5hheTOOY9j+uBRZSsI+zt2YadHU0WTIaYhPJPs2hWegbGqx+TOQ8vJjB0SncuFK8Fwjjz3TWZQY33zbfjmnNBiICHTl6FCEqyGqDWdAi+HkCadklACM3HkUpb0z4zuySDarzZubhFJnRD8wXwrPvM1AB1WjQzhKuhEvVbnBZR+/1bLLSZaNtRayZRX+eEq7HKwjMI0n2W6AxSxEW1r5ISB/pfaMPXZ8YRWojjofZ6dDzcaIcZdOcjLi1jv49Oo2ZTKZ58wq3VggGwbLhVkHoR+ntF7kot8rUn4tTqLc9dw7V3KPWQrYF5qXRtmSFhXg+A2S/zdXzEh0hUeo1k8Dye0P38xJVCDcyXC0BMMpJ181YEg5/9hWQy7xWVoK2sZDIF7yeX4FNDIDI6vgnEmk89A2KMkqzurmb8fWUOx7wXsLCQkCDkLNE/3vdexGVfCN07W+QgZs2nqRVvDgKot6MHPr6EPy5Oo6KiBN1dLRB9oKWpCvYfJZ6JQDCM0Quz+OHnAKKxZbS6N+GVvnZZBiahuJrEbGDkhn2eV0H8lj2AeCKF9z46D3V8wRBVVa5HTXU5Kiv1NhKJLGMutITFSK5eRBM7sK9d/m4Qv0zK4BFhMBfA2PPlSJeJ5/guw1NmI85zeMSPX36bKFRQFpUH2+rw3NP3wlme6XMWKQIordieHVaNAASG1d6nwDhuDsysK165738MYPTPmbzntqzMgR331eLxrmZsU6rNauY9g6mH7hkYyTItAQgm+zyHQXwwC5B9xZs/ORXDfDgBTjM2bixDY70TDkeeOas60ZukDIhB11h5GtpQOjbxhTbDGbDV2PAQlKZn7UNpXgDC1R0dy82/lf2eHoCPFhrVzNgC++tg6jefuR0nzYAZxOJ2pEr7QHQAQINZVmQ/CcI7oPiH5P60wESia982gKwTrTbUYCfEJKMNE9p7nvtzCvKD+CzSdBqtjb/azzpr53/3/Rd8mZtgZ2vfuAAAAABJRU5ErkJggg==)with image\.

  


1. ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEYElEQVRYCc1XTWwbVRD+xk2TOEnbpGl+nKQgb2gRUiERAqQEUomcuKAeQlsEEuIWIzUitMChB6hAPYAohYJEnAM/ByDpD1E5UAkBEj8tXBBpSxFt7U3auk7zR5w4tmM79qC3a693189uJBKVd9k3M9/8eN68eWPgDi9aqX/m3eswtvlRMHaB0QmCAqAmoz8HhgrQWTjoNNwz54hOpFZi+7YB8I2XnEhEXgQc+wGuW4lRAFNgOoIy5we09WismE7RAFj17AHzuwCaixkpIrsBwn5SvCcLYaQBMIOgel4H+DUAUkwhgxI+A3gbiusg0aG0XZ5nnPmQA/6JL0HYYwf/J5owDLfrGXsQjjyj6q3Dq+5cOGHshT/4ht2fJQOZMx+2g1aRZoB2U+vAqaxNIwC92qOXAWzNCtfoexNO3k5Ng1FhP3cEiWh/IeexpWVMz8bALOqp+BKYqZkYlpaWCwGbEXXsywq1DGhNRq2dkN3zn84FMfzVVSynGHe3bEBf7wPYULU+q2/5hheTOOY9j+uBRZSsI+zt2YadHU0WTIaYhPJPs2hWegbGqx+TOQ8vJjB0SncuFK8Fwjjz3TWZQY33zbfjmnNBiICHTl6FCEqyGqDWdAi+HkCadklACM3HkUpb0z4zuySDarzZubhFJnRD8wXwrPvM1AB1WjQzhKuhEvVbnBZR+/1bLLSZaNtRayZRX+eEq7HKwjMI0n2W6AxSxEW1r5ISB/pfaMPXZ8YRWojjofZ6dDzcaIcZdOcjLi1jv49Oo2ZTKZ58wq3VggGwbLhVkHoR+ntF7kot8rUn4tTqLc9dw7V3KPWQrYF5qXRtmSFhXg+A2S/zdXzEh0hUeo1k8Dye0P38xJVCDcyXC0BMMpJ181YEg5/9hWQy7xWVoK2sZDIF7yeX4FNDIDI6vgnEmk89A2KMkqzurmb8fWUOx7wXsLCQkCDkLNE/3vdexGVfCN07W+QgZs2nqRVvDgKot6MHPr6EPy5Oo6KiBN1dLRB9oKWpCvYfJZ6JQDCM0Quz+OHnAKKxZbS6N+GVvnZZBiahuJrEbGDkhn2eV0H8lj2AeCKF9z46D3V8wRBVVa5HTXU5Kiv1NhKJLGMutITFSK5eRBM7sK9d/m4Qv0zK4BFhMBfA2PPlSJeJ5/guw1NmI85zeMSPX36bKFRQFpUH2+rw3NP3wlme6XMWKQIordieHVaNAASG1d6nwDhuDsysK165738MYPTPmbzntqzMgR331eLxrmZsU6rNauY9g6mH7hkYyTItAQgm+zyHQXwwC5B9xZs/ORXDfDgBTjM2bixDY70TDkeeOas60ZukDIhB11h5GtpQOjbxhTbDGbDV2PAQlKZn7UNpXgDC1R0dy82/lf2eHoCPFhrVzNgC++tg6jefuR0nzYAZxOJ2pEr7QHQAQINZVmQ/CcI7oPiH5P60wESia982gKwTrTbUYCfEJKMNE9p7nvtzCvKD+CzSdBqtjb/azzpr53/3/Rd8mZtgZ2vfuAAAAABJRU5ErkJggg==)
2. ![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEYElEQVRYCc1XTWwbVRD+xk2TOEnbpGl+nKQgb2gRUiERAqQEUomcuKAeQlsEEuIWIzUitMChB6hAPYAohYJEnAM/ByDpD1E5UAkBEj8tXBBpSxFt7U3auk7zR5w4tmM79qC3a693189uJBKVd9k3M9/8eN68eWPgDi9aqX/m3eswtvlRMHaB0QmCAqAmoz8HhgrQWTjoNNwz54hOpFZi+7YB8I2XnEhEXgQc+wGuW4lRAFNgOoIy5we09WismE7RAFj17AHzuwCaixkpIrsBwn5SvCcLYaQBMIOgel4H+DUAUkwhgxI+A3gbiusg0aG0XZ5nnPmQA/6JL0HYYwf/J5owDLfrGXsQjjyj6q3Dq+5cOGHshT/4ht2fJQOZMx+2g1aRZoB2U+vAqaxNIwC92qOXAWzNCtfoexNO3k5Ng1FhP3cEiWh/IeexpWVMz8bALOqp+BKYqZkYlpaWCwGbEXXsywq1DGhNRq2dkN3zn84FMfzVVSynGHe3bEBf7wPYULU+q2/5hheTOOY9j+uBRZSsI+zt2YadHU0WTIaYhPJPs2hWegbGqx+TOQ8vJjB0SncuFK8Fwjjz3TWZQY33zbfjmnNBiICHTl6FCEqyGqDWdAi+HkCadklACM3HkUpb0z4zuySDarzZubhFJnRD8wXwrPvM1AB1WjQzhKuhEvVbnBZR+/1bLLSZaNtRayZRX+eEq7HKwjMI0n2W6AxSxEW1r5ISB/pfaMPXZ8YRWojjofZ6dDzcaIcZdOcjLi1jv49Oo2ZTKZ58wq3VggGwbLhVkHoR+ntF7kot8rUn4tTqLc9dw7V3KPWQrYF5qXRtmSFhXg+A2S/zdXzEh0hUeo1k8Dye0P38xJVCDcyXC0BMMpJ181YEg5/9hWQy7xWVoK2sZDIF7yeX4FNDIDI6vgnEmk89A2KMkqzurmb8fWUOx7wXsLCQkCDkLNE/3vdexGVfCN07W+QgZs2nqRVvDgKot6MHPr6EPy5Oo6KiBN1dLRB9oKWpCvYfJZ6JQDCM0Quz+OHnAKKxZbS6N+GVvnZZBiahuJrEbGDkhn2eV0H8lj2AeCKF9z46D3V8wRBVVa5HTXU5Kiv1NhKJLGMutITFSK5eRBM7sK9d/m4Qv0zK4BFhMBfA2PPlSJeJ5/guw1NmI85zeMSPX36bKFRQFpUH2+rw3NP3wlme6XMWKQIordieHVaNAASG1d6nwDhuDsysK165738MYPTPmbzntqzMgR331eLxrmZsU6rNauY9g6mH7hkYyTItAQgm+zyHQXwwC5B9xZs/ORXDfDgBTjM2bixDY70TDkeeOas60ZukDIhB11h5GtpQOjbxhTbDGbDV2PAQlKZn7UNpXgDC1R0dy82/lf2eHoCPFhrVzNgC++tg6jefuR0nzYAZxOJ2pEr7QHQAQINZVmQ/CcI7oPiH5P60wESia982gKwTrTbUYCfEJKMNE9p7nvtzCvKD+CzSdBqtjb/azzpr53/3/Rd8mZtgZ2vfuAAAAABJRU5ErkJggg==)

## Final Code

/\*\*  
 \* Main function  
 \* @param params Action params \* @returns \{Promise<\*>\} The response \*/async function run\(params\) \{  const disclosed = \{ \.\.\.params \};  Object\.keys\(disclosed\)\.forEach\(\(key\) => \{    if \(key\.match\(/^\[A\-Z0\-9\_\]\+$/\)\) \{      delete disclosed\[key\];    \}  \}\);  log\.trace\('%s', JSON\.stringify\(disclosed\)\);  
  return fetchViaDoclet\(params\);\}  


