# micro:bit Messages <span style="color:orange;font-size:1.5rem;">ADVANCED</span>
> Experiment with the radio - How to send messages!


**Learning Objectives:**
* Learn how to broadcast simple messages with the micro:bit
* Learn how communication channels work when sending information.

**Recommended grade level:**: grades 5 - 9

**Recommended duration:**: 30 min

**Materials:**

* micro:bit
* Computer
* Projector/Monitor/Smartboard

<button style="width: 100%; padding: 20px; cursor: pointer; box-shadow: 6px 6px 5px; #999; -webkit-box-shadow: 2px 6px 5px #999; -moz-box-shadow: 6px 6px 5px #999; font-weight: bold; background: orange; color: white; border-radius: 10px; border: 0px solid #999; font-size: 150%;" onclick=" window.open('https://makecode.microbit.org/','_blank')">START MAKECODE</button>

## Broadcast your name
> Use the radio blocks to send and receive messages between micro:bits.

<div style="color:white;font-size:1rem;background-color:#ACDDFA; margin:10px; padding:20px; border-radius:12px">
<strong>Notes</strong>
        <ul>
        <li>In Makecode radio channels are named groups, everybody within the same group can send and receive messages to each other.</li>
	</ul>
</div>

### Sending a message when button A is pressed:

**1.** From the **Radio** section add a **set radio group** to **1** block into the **on start** bracket

<img src="./assets/images/pm-mb3/1.png" width="100%">

**2.** From the **Input** section, drag the **on button A pressed** block into the coding area.

**3.** From the **Radio** section, drag the **radio send** string block into the **on button A pressed** block brackets and then type your name in the block.

<img src="./assets/images/pm-mb3/2.png" width="100%">

### To receive a message:

**1.** In the **Radio** section, drag the **on radio received receivedString** block into the coding area.

**2.** From the **Basic** section, drag the **show string** block into the coding area. 

**3.** Add a **receivedString** block by dragging  it from the on radio received block

<img src="./assets/images/pm-mb3/3.png" width="100%">

        NOTES
        * Don’t confuse the on radio received “receivedString” 
        and the on radio received “receivedNumber” block. 

<img src="./assets/images/pm-mb3/4.png" width="100%">

## Download your Program
**1.** Connect your **micro:bit** to your computer using a USB cable.

**2.** The micro:bit will show up as a drive called **MICRO:BIT**

**3.** On the **MakeCode** platform, after creating your code, press the **Download** button in order to save your code.
	
<video width="100%" height="" controls>
    <source src="/assets/images/videos/A.mp4" type="video/mp4">
</video>

**4.** Save it as a **.hex** file, which is a format that the micro:bit can understand. Locate the downloaded file and drag it to the **MICRO:BIT** drive to upload your code to the micro:bit.

<video width="100%" height="" controls>
    <source src="/assets/images/videos/B.mp4" type="video/mp4">
</video>

## Extension 
> Review how a micro:bit can communicate with other micro:bits in the area.

* **If two people want to send messages between themselves (and no one else), how would they adapt their code?**

<video width="100%" height="" controls>
    <source src="/assets/images/videos/basket.mp4" type="video/mp4">
</video>

---

> Using a different radio group

<img src="./assets/images/pm-mb3/5.png" width="100%">

* Test different kinds of obstacles that can stop or reflect radio waves: try paper, doors, walls and tin foil (radio waves can bounce on tin foil)

* Measure how far the signal can travel by using a step counter.


## Activity Ideas
* **Other games using the micro:bit Radio extension**
> [Microbit Radio Games: Ball Pass](https://summer-camp-2019.kidscodejeunesse.org/MB1/)

> [Microbit Radio Games: Shoot and Score](https://summer-camp-2019.kidscodejeunesse.org/MB2/)

> [Microbit Radio Games: Long Pass](https://summer-camp-2019.kidscodejeunesse.org/MB3/)

* **Projects for children and teens to combine creativity and technology to solve the Global Goals**
> [Inspiratons - 7 Projects](https://microbit.org/do-your-bit/inspiration/)

