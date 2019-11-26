# AI Computer Vision 

**Learning Objectives:**
* Develop familiarity with AI concepts such as training process, training data and confidence level.

* Develop familiarity with computational thinking concepts like decomposition, abstraction and pattern recognition in the context of AI.

* Practice reframing a problem so that it can be solved using AI.

**Recommended duration:** 30 min

**Materials:**:

* Facilitator computer with smartboard/projector/monitor

* Internet connection + Google Chrome + Webcam

* Student computers, one for every two students

<button style="width: 100%; padding: 20px; cursor: pointer; box-shadow: 6px 6px 5px; #999; -webkit-box-shadow: 2px 6px 5px #999; -moz-box-shadow: 6px 6px 5px #999; font-weight: bold; background: orange; color: white; border-radius: 10px; border: 0px solid #999; font-size: 150%;" onclick=" window.open('https://teachablemachine.withgoogle.com/v1/', '_blank')"> Teachable Machine</button>


## Teachable Machine

##### The Teachable Machine landing page
<img src="./assets/images/pm-ai-tm/pm-tm-1.png" width="100%">

##### The Teachable Machine interface
<img src="./assets/images/pm-ai-tm/lucie.png" width="100%">

> **SKIP THE TUTORIAL AND ALLOW THE USE OF CAMERA**

## Train the AI model to recognize gestures

This training will produce a GIF.

For the first category, make the sign language action for “please” while pressing and holding the train green button. It will add photos of you (training data) in the green category: 50 examples per category is enough!


<img src="./assets/images/pm-ai-tm/please.jpg" width="25%">

##### Sign for please while pressing the train green button

<img src="./assets/images/pm-ai-tm/confidence.png" width="100%">

<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
	<ul>
	        <li>50 examples per category is enough to train this model.</li>
	</ul>
</div>

## Train 3 categories

> **GREEN:** tthe sign for please

<img src="./assets/images/pm-ai-tm/please.jpg" width="25%">

> **PURPLE:** the sign for hello 

<img src="./assets/images/pm-ai-tm/hello.jpg" width="25%">

> **ORANGE:** standing still - no movements

<img src="./assets/images/pm-ai-tm/still.png" width="25%">

## Extensions

You can try training the Machine with these other sign

<img src="./assets/images/pm-ai-tm/signs.jpg" width="100%">

You can try to change the background by turning your computer 45° to the right or the left - does the machine still recognise your signing? You can also try having someone else make the same signs in front of the camera and see if it works for a different person.

## Reflection

> Why is one category just about standing still?

In order to recognize signing gestures, the machine has to understand standing still. This is what you are doing by training the orange category.

> What is confidence?

The confidence level is the AI sharing the confidence it has in its decision, as if we’ve asked it if it’s sure. 0% is not sure at all, 50% is chance level meaning it is choosing randomly, 100% means it is really sure.


<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
	<ul>
	        <li> Sometimes the AI makes the wrong choice (misidentifying the sign you are making) but it is not very confident of its decision, so we can’t really trust it in that situation
</li>
	</ul>
</div>

## To go further 

[New version of the Teachable Machine:](https://teachablemachine.withgoogle.com/train) 