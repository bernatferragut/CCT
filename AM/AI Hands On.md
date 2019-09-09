# AI Hands On

**Recommended grade level:** 5-8

**Recommended duration:** 30 min

**Materials:**
* Smartboard / projector / monitor 
* Internet connection + Google Chrome
* Laptops
* [Access to The Teachable Machine](https://teachablemachine.withgoogle.com/)

**Learning objectives:** 
* Familiarity with the concepts of AI, training process, training data and confidence level.
* Familiarity with computational thinking concepts like decomposition, abstraction and pattern recognition in the context of AI.
* Ability to reframe a problem in a way that it can be solved using AI.
* Familiarity with the teachable machine interface.


## Teachable Machine ( 20min.)
> Train an AI computer vision model.

**1.** Set up The Teachable Machine platform

**2.** Skip the tutorial (Allow camera usage)

##### Teachable Machine website
![](/assets/images/am-tm/am-tm-1.png)

##### Teachable Machine main interface
![](/assets/images/am-tm/am-tm-2.png)

**3.** Class is introduced to the teachable machine interface:

> Class will be training an AI model to recognize gestures. The result of that training will be displayed by a GIF. 

> Demonstrate training for the first category with the sign for “please” by pressing and holding the train green button.

    NOTES
    * It will add photos of you (training data) in the green category.

**4.** Ask class to train 3 categories: 

* **Green:** the sign for please 
* **Purple:** the sign for hello 
* **Orange:** standing still - no movements
---
    NOTES
    * 50 examples per category is enough to train this model.
    * See slide 21 for other signs that the class might use.


## Reflection(10min.)
> Class reflects on the training process of their machine.

* Q. Why one category is just about standing still? 

* A. In order to recognize signing gestures, the machine has to understand standing still. This is what you are doing by training the orange category.

* Q. What is confidence? 
* A. The confidence level is the AI sharing with us the confidence it has in its decision (exactly like when asked “are you sure?”). 0% is not sure at all, 50% is chance level meaning it is choosing randomly, 100% means it is really sure. 

---
    NOTES
    * Sometimes the AI makes wrong choices:
        * Misidentifying the sign you are making.
        * Not being very confident of its decision.
        * So we can’t really trust it in that situation.