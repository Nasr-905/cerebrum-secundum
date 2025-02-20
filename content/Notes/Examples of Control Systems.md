---
tags:
  - control-theory
  - ECE/356/lec2
---
##### Example 1: Cruise Control of a Car
![[Pasted image 20250122161837.png]]

- $u$ - Force imparted by the engine
- $M$ - Mass of the car
- $-B\dot{x}$ - Friction
- $\theta$ - Slope incline
###### Governing Equation
$$M\ddot{x} = u + \underbrace{Mg\sin \theta}_{\text{Environmental Disturbance } d } - B\dot{x}$$
Let $y = \dot{x}$ to get a linear $1^{\text{st}}$ order ordinary differential equation

$$\begin{aligned} \dot{y} &= -\frac{B}{M}y + \frac{1}{M}(u + Mg\sin\theta) \\ &= -\frac{B}{M}y + \frac{1}{M}(u + d) \quad \text{where } d \text{ represents disturbance.} \end{aligned}$$

Say we want to obtain a certain speed $y_d$

![[Pasted image 20250122162657.png]]
*Note that $-\frac{B}M$ is a constant and $y$ refers to $y_\text{meas}$ and is measured by a sensor in the plant*

##### Example 2: Voltage Control of an RLC Circuit

![[Pasted image 20250122163447.png]]

- $u$ input (voltage)
- $y$ output (capacitor voltage)
$$\begin{aligned} \text{Kirchhoff's Voltage Law:} \quad & u - Ri - L\frac{di}{dt} - y = 0, \qquad & (1) \\ \text{Kirchhoff's Current Law:} \quad & i = C\frac{dy}{dt} \qquad & (2)\end{aligned}$$

Substituting $i$ from eq. 2 into eq. 1 and dividing out by $LC$ gives

$$\frac{d^2y}{dt^2} + \frac{R}{L} \frac{dy}{dt} + \frac{1}{LC}y = u \tag{3}$$
###### State-space Model
**State Vector**
$$x = \begin{bmatrix}x_1 \\x_2 \end{bmatrix} := \begin{bmatrix} y \\ i \end{bmatrix}$$
*Defines the state of our dependent variables. It is essentially a vector of all the variables in all our equations that change during the system operation, except the input $u$*

Now we write eq. 1 and 2 in matrix form solving for the derivatives
$$\dot{x} = Ax + Bu =: f(x, u)\tag{4}$$
$$A = \begin{bmatrix}0 & \frac{1}C \\ -\frac{1}C & -\frac{1}R\end{bmatrix}, \quad B = \begin{bmatrix}0 \\ \frac{1}C\end{bmatrix}$$
$$y = Cx + Du := h(x,u) \tag{5}$$
$$ C = \begin{bmatrix} 1 & 0\end{bmatrix}, \quad D = 0$$
![[Pasted image 20250122180506.png]]

##### Example 3: Inverted Pendulum

![[Pasted image 20250122180609.png]]

- $m$ - Point mass
- $l$ - Length of massless rod
- $y$ - Angle of pendulum from vertical
- $u$ - Torque applied at the pivot

$$\begin{aligned} \text{Kinetic Energy:} \quad & K = \frac{1}{2} m \ell^2 \dot{y}^2, \qquad & \text{(1)} \\ \text{Potential Energy:} \quad & P = m g \ell \cos(y), \qquad & \text{(2)} \\ \text{Defining the state:} \quad & x = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} := \begin{bmatrix} y \\ \dot{y} \end{bmatrix}, \qquad & \text{(3)} \end{aligned}$$
###### Governing Equation
*The specifics of the governing equation isn't the focus of the course*
$$\begin{aligned}\text{Lagrangian:}& \quad L = K - P \\ \text{Euler-Lagrange Equation: } & \quad \frac{d}{dt}\biggl(\frac{\partial L}{\partial \dot{y}}\biggr) - \frac{\partial L}{\partial y} = u\\ \\ & \frac{\partial L}{\partial \dot{y}} = m \ell^2 \dot{y}, \\
    &\frac{d}{dt} \left( \frac{\partial L}{\partial \dot{y}} \right) = m \ell^2 \ddot{y}, \\
    &\frac{\partial L}{\partial y} = -m g \ell \sin(y)\\
\\ & ml^2\ddot{y} + mgl\sin(y) = u \end{aligned}$$

###### State-space Model

$$ x = \begin{bmatrix} x_1 \\ x_2\end{bmatrix} := \begin{bmatrix} y \\ \dot{y}\end{bmatrix}$$
$$\begin{aligned} \dot{x} &= \begin{bmatrix} x_2 \\ -g \sin(x_1) + \frac{1}{m \ell} u \end{bmatrix} =: f(x, u), \\ y &= \begin{bmatrix} 1 & 0 \end{bmatrix} x =: h(x, u). \end{aligned}$$

##### Example 4: DC Motor

![[Pasted image 20250122225856.png]]

- $e$ - Back emf; voltage induced from movement of armature coils in magnetic field
- $b\dot{\theta}$ - Friction
- $\tau$ - Torque produced by current in coils and magnetic field of magnets
- $I$ - Moment of inertia
- $u$ - Input voltage
- $K_e$ - Back EMF Constant, $e = K_e \dot{\theta}$
- $K_t$ - Torque constant, $\tau = K_ti_a$

$$\begin{aligned} \text{Kirchoff's Voltage Law:} \quad & u = L_a\frac{di_a}{dt} + R_ai_a + K_e \dot{\theta}, \qquad & \text{(1)} \\ \text{Newton's Second Law:} \quad & 0 = I\ddot{\theta} + b\dot{\theta} - K_ti_a ,\qquad & \text{(2)} \end{aligned}$$


##### The Way I like to think of making State-Space Models
1. List all of the variables
2. Remove the constants
3. Take an integral of remaining constants (e.g. if we have $\ddot{\theta}, \dot{\theta}, \theta$, then we're left with $\dot{\theta}, \theta, 1$)
4. Remove the constants again
5. What you're left with are variables of the state-space model