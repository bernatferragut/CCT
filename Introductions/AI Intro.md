# AI Intro
> How does an AI system see the world?

**Learning objectives:** 
* Develop familiarity with AI thinking
* Identifying the different parts of developing an AI system: from building a data set to testing the AI


## 5 human senses
> How do babies learn what forks are: 5 human senses

![](./assets/images/am-ai-intro/AI_Intro_Slides_1.png)

<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
	<ul>
		<li>As kids, we learn to use a fork with our 5 senses</li>
        <li>That way we experience the function of a fork</li>
	</ul>
</div>

## Collect examples
> Let’s teach an AI what a fork is. The first step would be to collect examples and identify forks in various images.

![](./assets/images/am-ai-intro/AI_Intro_Slides_2.png)

<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
	<ul>
		<li>To teach computers how to recognize a fork:</li>
        <li>An AI trainer gathers a very large collection of images (data set)</li>
        <li>This data contains labeled images, forks were manually identified</li>
        <li>The more examples we have the better the AI will work</li>
	</ul>
</div>

## Input examples in your model
> Input examples and counterexamples to train your model

![](./assets/images/am-ai-intro/AI_Intro_Slides_4.png)

<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
	<ul>
		<li>The AI trainer inputs the data set in the system.</li>
        <li>The AI system builds a model of what the forks look like from different angles.</li>
        <li>The AI trainer inputs a collection of counterexamples - objects that are not forks.</li>
        <li>That way the AI can identify the difference between what a fork looks like and what a fork doesn’t look like.</li>
	</ul>
</div>

## Test your model
> Test your model with another example, i.e. - a spoon

![](./assets/images/am-ai-intro/AI_Intro_Slides_6.png)

<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
	<ul>
		<li>The AI trainer runs a test to ensure the fork model works well and the AI is able to identify the images of forks.</li>
        <li>We ask the AI if this image (the spoon) is a fork or not.</li>
        <li>Okay so AI can find us a fork.. what’s the point? How does that help us?</li>
	</ul>
</div>

## Recap
> To solve problems with AI, build a model of what a fork looks like 

![](./assets/images/am-ai-intro/AI_Intro_Slides_7.png)

<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
	<ul>
		<li>During the training, the AI found a common pattern in all of the images of forks.</li>
        <li>The AI system built an internal model of what a fork looks like.</li>
	</ul>
</div>

## Using AI
> Use your AI: identify a fork pattern!

![](./assets/images/am-ai-intro/AI_Intro_Slides_8.png)

<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
	<ul>
		<li>During the test, the AI takes an image and analyses it to identify if a fork is present. </li>
        <li>It starts by detecting the edges and identifying the pattern of a fork.</li>
	</ul>
</div>

## Machine Learning
> Machine learning is a technique that teaches computers to do what comes naturally to humans: **learn from experience.**

<img src="./assets/images/am-ai-intro/AI_Intro_Slides_17.png" width="100%">

## Why is it so much work?
> Because your brain is really good at building models of objects

![](./assets/images/am-ai-intro/AI_Intro_Slides_9.png)

Your brain is really good at building models of objects and identifying them - even if all parts of the objects are not visible.

## Self-driving cars
> Some obvious things for us are still very difficult for AI

<img src="./assets/images/am-ai-intro/AI_Intro_Slides_18.png" width="100%">

### CAN DO
* Identify the position of other cars

### CAN'T DO
* Differentiate between hand signs that mean stop, hitchhiker or bike turning


## X-ray diagnosis
> AI flourishes with the input of large and high quality sets of data. 

<img src="./assets/images/am-ai-intro/AI_Intro_Slides_19.png" width="100%">

### CAN DO
* Identify pneumonia from 10,000 labeled images

### CAN'T DO
* Identify pneumonia from 10 images, a textbook chapter and a few clinical cases

<div style="color:white;font-size:0.8rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>References</strong>
	<ul>
    <li> MIYAZAKI, H., et al. (2006). Hauru no ugoku shiro = Howl's moving castle. COLUMBUS, C. et al. (2001).</li>
    <li>Harry Potter And the Sorcerer's Stone. BIRD, B., et al. (2007). Ratatouille.</li>
    <li>Pexel</li>
    <li>The Matlab website</li>
    <li>Fork bent by James Rand. Spaghetti wound on a fork close-up by Marco Verch. DOCTER, P., et al. (2015)</li>.Inside Out.
    <li>Source AI For Everyone Andrew Ng, Coursera, 2018</li>
    <li>Eko Siswono Toyudho / Caters New, vox</li>
    <li>Pixabay, Lucasfilm Ltd. LLC‎</li>
    <li>Zack, Karen. “Chihuahua or Muffin ? Pic.twitter.com/LzZ1lwoVrP.” </li>
    <li>Twitter, Twitter, 10 Mar. 2016, twitter.com/teenybiscuit/status/707727863571582978.</li>
	</ul>
</div>