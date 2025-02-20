---
tags:
  - control-theory
  - robo/modelling
  - ECE/356/lec1
---
![[Pasted image 20250122151216.png]]

**Say**
- $u$ - Voltage
- $\tau$ - Torque
- $\theta$ - Angle of link 2 relative to link 1
- $\theta_d$ is the desired angle

###### Goal
*What is $u(t)$ so $\theta \to \theta_d$?*

###### Modelling
- We use a sensor to determine $\theta$
- This block diagram model is called a 'plant'

![[Pasted image 20250122152204.png]]

![[Pasted image 20250122152249.png]]

We want to compare $\theta_{\text{meas}} to $\theta_d$ so we define $e := \theta_{\text{meas}} - \theta_d$ and use it to determine $v(t)$

![[Pasted image 20250122152515.png]]

So we can redefine our goal as:

*Design the controller to map (algorithm) $e \mapsto u$ such that $e \to 0$ (i.e. $\theta_{\text{meas}}\to \theta_d$)*

***The objective of the course is to convert desirable system behavior into mathematical conditions and implementable algorithms***
###### Main Steps in the Control Design Process

1. Construct a mathematical model suitable to control design (1st half of the course)
2. Define verifiable specifications (transient and steady-state) (1st half of the course)
3. Analyze and evaluate stability of the closed-loop system (CLS) (2nd half of the course)
4. Design the controller (2nd half of the course)
5. Simulate and tune parameters (Labs)
6. Implement in practice (Labs)