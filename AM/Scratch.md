
# Scratch Intro

Scratch is a programming language that allows you to use code blocks to create animations, stories, musical instruments, games, and much more. It's a bit like programming using Lego!

**EDITOR**
![SCRATCH 3.0](/assets/images/scratch.png)
**TEACHER ACCOUNT:** [Creating a Scratch Account](https://scratch.mit.edu/educators/#teacher-accounts)

> To request an account as a teacher you will have to fill the following form and wait for 24h.

**EDUCATORS FAQ:** [Scratch FAQ](https://scratch.mit.edu/educators/faq)



## How to move in Scratch?

<!-- ## PDF
[Link to PDF]([https://docs.google.com/document/d/14m6sM5742f5tcNvaA6AtpJ5kkyg5ElFPkMub8RG8fXE/edit]) -->
**Recommended grade level:**: grades 5 - 7

**Recommended duration:**: 30 min.

**Learning Objectives:**
* Learn how to move using the centric system - like a GPS -.
* Learn how to move using the cartesian system - x,y coordinates -.

**Materials:**: Scratch 3.0 platform

## Starting point (10 min.)
> Before anything, we must define which will be our starting point using x,y coordinates.

##### Choose the top left side of the screen as the starting point
![](/assets/images/am-scratch/sc-1.png)

**1.** Use an **event** block to trigger your action. Ex: **When ‘space’ key is pressed**

**2.** Define with the block **go to x,y** the starting point. Start from the top left corner.
(0,0 is at the center of the screen and the scene dimensions are: 
-240 +240 on x and -180 +180 on y)

**3.** Create a **new sprite** from the library and place it on the bottom right corner.

##### Clicking over the cat icon you can choose a new sprite, a ball in the example. 
![](/assets/images/am-scratch/sc-2.png)

    NOTES
    * Why the first program we code is the starting point one?
    * The Scratch coordinates systems is: -240+240 in x, -180+180 in y
    * Use the Rotation wheel to see how angles work in Scratch
    * Find all the possibilities of the block 'When key is pressed'


## Centric motion (10 min.)
> Using the move, turn and repeat to move

##### Choose the event 'number 1' to activate the centric movement
![](/assets/images/am-scratch/sc-3.png)

    NOTES
    * Use the right mouse button to launch a pop-up and add comments.
         


**1.** First we turn using the **turn** block by 35 degrees to aim towards the ball
( we could use the block **point towards** to be more flexible and precise )

**2.** We use the **wait** block to give some ‘timing’ to the animation otherwise it goes too fast and we cannot really see all the steps we are doing. Adjust the amount of **repetitions** needed to combined with the **advance** block ( observe we are just doing a multiplication ) to achieve our goals. We will need around 400 steps to achieve the goal.

**3.** At any time, we can go back to our starting point using the event back-space.

**4.** We finish by adding the event: **when 1 key is pressed** to trigger the program.

    NOTES
    * Why do we use a wait block between blocks?
    * Make sure to show different possibilities when advancing with a loop

## Cartesian motion (10 min.)
> Using the cartesian coordinates to move.

##### Choose the event 'number 2' to trigger the cartesian movement
![](/assets/images/am-scratch/sc-4.png)

    NOTES
    * Here for the first time we use a condition.
    * We react when a color is touched.
    * In this case, the ball’s red color.
         


**1.** Use the **glide** block here. It allows us to define the point in space (x,y) where we want to go and also how much time it will take to arrive there.

**2.** Use the **if** block here to allow us to check if a condition is met. In this case, if the condition **touching the red color is true** the cat will say the classic: 
‘Hello World’.

**3.** We finish by adding the event: **when 2 key is pressed** to trigger the program.

    NOTES
    * Why do we use a wait block between blocks?
    * Make sure to show different possibilities when advancing with a loop

## Reflection
* Do you understand properly the two distinct ways to move in Scratch?
* Why would you choose one over the other and when?

## Remix
* [Remix this exercise to start: ](https://scratch.mit.edu/projects/325327677/editor/)
* [Scratch Studio](https://scratch.mit.edu/studios/25104660/)
* [Exercise in PDF](https://docs.google.com/document/d/14m6sM5742f5tcNvaA6AtpJ5kkyg5ElFPkMub8RG8fXE/edit#)


