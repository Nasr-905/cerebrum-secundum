---
date: 2025-01-07
tags:
  - ECE/355
  - ECE/363/lec1
  - signals-communication
  - math
  - analog-digital-comm-haykin-moher-2nd/2-1
---
###### Fourier Transform (Analysis Equation)

The Fourier transform will ***Uniquely*** define $G(f)$
$$G(f) = \mathcal{F}\{g(t)\} = \int_{-\infty}^\infty g(t) \exp(-j2\pi f t) dt \qquad (2.1)$$

For a non-periodic $g(t)$. Periodic Signals will use a *Fourier Series* instead.

###### Inverse Fourier Transform (Synthesis Equation)

$$g(t) = \mathcal{F}^{-1}\{G(f)\} = \int_{-\infty}^\infty G(f) \exp(j2\pi f t) df \qquad (2.2)$$

***Uniquely*** defines $g(t)$
###### Fourier Transform is Complex
$$G(f) = |G(f)|\exp(j\theta(f))] = |G(f)|\angle{\theta(f)} \qquad  (2.6)$$

$|G(f)|$ and $\theta(f)$ are ***uniquely*** defined for every $f$
###### Dirichlet's Conditions

If these are satisfied $g(t)$, then it must have Fourier Transform; if not, it may still have one.

$g(t)$ is:
1. Single-valued with finite extrema in any finite interval
2. Finite discontinuities in any finite interval
3. Absolutely integrable: $\int_{-\infty}^{\infty}|g(t)|dt < \infty$

###### All physically realizable functions have a Fourier Transform

Physically realizable functions are all energy functions defined as:

$$\int_{-\infty}^\infty |g(t)|^2 dt < \infty$$

###### Fourier Transform is Conjugate Symmetric for real time-domain Functions

if $g(t) = g^*(t)$ ($g(t)$ is real), then $G(t)$ will have an even real part and an odd imaginary part:

- $G(-f) = G^*(f) \iff |G(-f) = |G(f)|$
	- $|G(f)|$ is even
- $\theta(-f) = -\theta(f)$
	- $\theta(f)$ is odd

But if $g(t)$ is both real and even ($g(t) = g^*(t)$, $g(-t) = g(t)$) then $G(t)$ is also real and even. This is shown in the rectangular function example 

###### Inverse Relationship of the Fourier Transform

A pulse narrow in time has a wide range of frequencies and a function defined over a lot of time has a narrow frequency range

#### Common Fourier Pairs

##### Rectangular Function and Sinc

###### Rectangular Function

$$\text{rect}(t) = \begin{cases} 1, & -\frac{1}{2} \leq t \leq \frac{1}{2} \\ 0, & t < -\frac{1}{2} \text{ or } t > \frac{1}{2} \end{cases} \qquad (2.7)$$

More generally: $g(t) = A\text{rect}(\frac{t}T)$ 

###### Sinc Function

$$\text{sinc}(\lambda) = \frac{\sin(\pi \lambda)}{\pi \lambda} \qquad (2.9)$$

![[Pasted image 20250116223035.png]]

$$\begin{aligned} G(f) &= \int_{-T/2}^{T/2} A \exp(-j 2 \pi f t) \, dt \\ &= A T \left( \frac{\sin(\pi f T)}{\pi f T} \right) \\ &= AT\text{sinc}(ft)\end{aligned} \qquad (2.8)$$

So:
$$A \text{rect}(\frac{t}{T}) \Longleftrightarrow AT\text{sinc}(fT) \qquad (2.10)$$

![[Pasted image 20250117001752.png]]

##### Truncated Decaying Exponential Pulse

###### Unit Step Function

$$u(t) = \begin{cases} 1, & t > 0 \\ \frac{1}{2}, & t = 0 \\ 0, & t < 0 \end{cases} \qquad (2.11)$$

###### Decaying Exponential Pulse
$$g(t) = \exp(-at)u(t)$$

###### Rising Exponential Pulse
$$g(-t) = \exp(at)u(-t)$$

![[Pasted image 20250117001737.png]]
###### Fourier Transform

$\begin{aligned}G(f) &= \int_{0}^{\infty} \exp(-at) \exp(-j 2 \pi f t) \, dt \\ &= \int_{0}^{\infty} \exp\left[-t(a + j 2 \pi f)\right] \, dt \\ &= \frac{1}{a + j 2 \pi f}, \qquad \begin{aligned}\mathcal{F}\{g(-t)\} = \frac{1}{a - j2\pi f}\end{aligned}\end{aligned}$

So:
$$\begin{aligned}\exp(-at)u(t) \Longleftrightarrow \frac{1}{a+j2\pi f}\end{aligned} \qquad (2.12)$$

![[Pasted image 20250117002339.png]]

