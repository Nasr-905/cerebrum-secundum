---
date: 2025-01-10
tags:
  - math
  - ECE/355
  - ECE/363/lec2
  - signals-communication
  - analog-digital-comm-haykin-moher-2nd/2-2
---
#### Properties of The Fourier Transform
##### Linearity (Superposition)

Let $g_1(t) \Longleftrightarrow G_1(f), \quad g_2(t) \Longleftrightarrow G_2(f)$, then $\forall c_1, c_2 \in \mathbb{C}$:
$$c_1 g_1(t) + c_2 g_2(t) \Longleftrightarrow c_1 G_1(f) + c_2 G_2(f) \qquad (2.14)$$
###### Proof

From the linearity of integrals

##### Dilation

Let $g(t) \Longleftrightarrow G(f)$, $\forall a \in \mathbb{R}, \quad a \neq 0$:
$$
g(at) \Longleftrightarrow \frac{1}{|a|} G\left(\frac{f}{a}\right) \qquad (2.20)
$$
###### Proof
$\begin{aligned} \mathcal{F}[g(at)] &= \frac{1}{|a|} \int_{-\infty}^{\infty} g(\tau) \exp\left[-j 2 \pi \left(\frac{f}{a}\right) \tau\right] d\tau \\ &= \frac{1}{|a|} G\left(\frac{f}{a}\right) \end{aligned}$

###### Intuition

From this we can verify our earlier claims from last lecture that "A pulse narrow in time has a wide range of frequencies and a function defined over a lot of time has a narrow frequency range"

##### Reflection (Special Case of Dilation)
Let $a = -1, \quad g(t) \Longleftrightarrow G(f)$ , then
$$g(-t) \Longleftrightarrow G(-f) \qquad (2.21)$$
##### Conjugation Rule
Let $g(t) \in \mathbb{C}, \quad g(t) \Longleftrightarrow G(f)$, then:
$$g^*(t) \Longleftrightarrow G^*(-f) \qquad (2.22)$$
###### Proof
$\begin{aligned} g(t) &= \int_{-\infty}^\infty G(f) \exp(j 2 \pi f t) \, df\\ & \text{Remember } (ab)^* = a^*b^* \\ g^*(t) &= \int_{-\infty}^\infty G^*(f) \exp(-j 2 \pi f t) \, df\\ &\text{Substituting } f \to -f \text{ gives:}\\ g^*(t) &= -\int_{\infty}^{-\infty} G^*(-f) \exp(j 2 \pi f t) \, df\\ g^*(t)& = \int_{-\infty}^\infty G^*(-f) \exp(j 2 \pi f t) \, df\\ \end{aligned}$

##### Duality
If $g(t) \Longleftrightarrow G(f)$, then:
$$G(t) \Longleftrightarrow g(-f) \qquad (2.24)$$
###### Proof
$$\begin{aligned} g(t) & = \int_{-\infty}^\infty G(f) \exp(j2\pi f t) df \\ g(-t) & = \int_{-\infty}^\infty G(-f) \exp(-j2\pi f t) df \\ g(-f) & = \int_{-\infty}^\infty G(t) \exp(-j2\pi f t) df\end{aligned}$$
##### Time Shifting

If $g(t) \Longleftrightarrow G(f)$ and $t_0 \in \mathbb{R}$, then:
$$g(t-t_0) \Longleftrightarrow  G(f)\exp(-j2\pi ft_0) \qquad (2.26)$$

###### Proof

$$\begin{aligned} \mathcal{F}\{g(t-t_0)\} & = \int_{-\infty}^\infty g(t-t0) \exp(-j2\pi f t) dt \\ \rightarrow \tau & = (t-t_0) \\ & = \exp(-j 2 \pi f t_0) \int_{-\infty}^\infty g(\tau) \exp(-j 2 \pi f \tau) \, d\tau G \\ & = \exp(-j 2 \pi f t_0) G(f)\end{aligned}$$
###### Intuition
Shifting $g(t)$ by a constant $t_0$, doesn't change $|G(f)|$, but instead changes $\angle \theta (f)$ by $-j2\pi f t_0$.

##### Frequency Shifting

If $g(t) \Longleftrightarrow G(f)$ and $f_c \in \mathbb{R}$, then
$$\exp(j2\pi f_c t)g(t) \Longleftrightarrow G(f-f_c) \qquad (2.27)$$
###### Proof

$\begin{aligned} \mathcal{F}[\exp(j 2 \pi f_c t) g(t)] &= \int_{-\infty}^\infty g(t) \exp\left[-j 2 \pi t (f - f_c)\right] \, dt \\ & = G(f-f_c)\end{aligned}$

###### Intuition
By rotating $g(t)$ by $\exp(j2\pi f_c t)$, we shift the frequencies of the signal back by $f_c$. Note that the rotation depends on time, it's not constant, so even a rotation of say $\exp(j 2\pi t)$ will effect the frequency response.

##### Area Under $g(t)$

If $g(t) \Longleftrightarrow G(f)$, then
$$\int_{-\infty}^\infty g(t) dt = G(0)$$
###### Proof
Set $f = 0$, on the analysis equation (2.1)

##### Area Under $G(f)$

If $g(t) \Longleftrightarrow G(f)$, then
$$g(0) = \int_{-\infty}^\infty G(f) dt$$
###### Proof
Set $t = 0$, on the synthesis equation (2.2)

##### Differentiation in the Time Domain

Let $g(t) \Longleftrightarrow G(f)$ and assume that the $n^{th}$ derivative is Fourier transformable, then
$$\frac{d^n}{dt^n}g(t) \Longleftrightarrow (j2\pi f)^nG(f) \qquad (2.34)$$
###### Proof
Take the derivative of the synthesis equation.

##### Integration in the Time Domain
If $g(t) \Longleftrightarrow G(f)$, and $G(0) = 0$, then: $$ \int_{-\infty}^t g(\tau) d\tau \Longleftrightarrow \frac{1}{j2\pi f} G(f) \qquad (2.41) $$
###### Proof
$$ \begin{aligned} g(t) &= \frac{d}{dt} \int_{-\infty}^t g(\tau) d\tau \\ G(f) &= (j 2 \pi f) \mathcal{F}\left[\int_{-\infty}^t g(\tau) d\tau\right] \\ \mathcal{F}\left[\int_{-\infty}^t g(\tau) d\tau\right] &= \frac{1}{j 2 \pi f} G(f) \end{aligned} $$

##### Intuition
Integration in the time domain reduces the amplitude of the Fourier transform in the frequency domain by a factor of $j 2 \pi f$, effectively "dividing" by $f$. The condition $G(0) = 0$ ensures no singularity occurs at $f = 0$.

##### Modulation Theorem

If $g_1(t) \Longleftrightarrow G_1(f)$ and $g_2(t) \Longleftrightarrow G_2(f)$, then:
$$
g_1(t) g_2(t) \Longleftrightarrow \int_{-\infty}^\infty G_1(\lambda) G_2(f - \lambda) d\lambda = G_2(f)*G_1(f)\qquad (2.49)
$$

###### Proof

1. **Start with the Fourier transform of the product $g_1(t)g_2(t)$**:
   $$
   \mathcal{F}[g_1(t) g_2(t)] = G_{12}(f),
   $$
   where:
   $$
   G_{12}(f) = \int_{-\infty}^\infty g_1(t)g_2(t) \exp(-j2\pi ft) dt.
   $$

2. **Substitute the Fourier transform of $g_2(t)$ into the integral**:
   $$
   g_2(t) = \int_{-\infty}^\infty G_2(f') \exp(j2\pi f't) df',
   $$
   giving:
   $$
   G_{12}(f) = \int_{-\infty}^\infty g_1(t) \left[\int_{-\infty}^\infty G_2(f') \exp(j2\pi f't) df'\right] \exp(-j2\pi ft) dt.
   $$

3. **Rearrange and define $\lambda = f - f'$**:
   After interchanging the order of integration and simplifying:
   $$
   G_{12}(f) = \int_{-\infty}^\infty G_1(\lambda) G_2(f - \lambda) d\lambda.
   $$
##### Practical Implication

In communication systems, this property shows that multiplying signals in the time domain spreads their spectra in the frequency domain, which is key in understanding signal processing and transmission.

#### Convolution Theorem

If $g_1(t) \Longleftrightarrow G_1(f)$ and $g_2(t) \Longleftrightarrow G_2(f)$, then:
$$
\int_{-\infty}^\infty g_1(\tau) g_2(t - \tau) d\tau = g_1(t)*g_2(t) \Longleftrightarrow G_1(f) G_2(f) \qquad (2.51)
$$

##### Duality with Modulation Theorem

Note that Properties 11 and 12, described by Eqs. (2.49) and (2.51), respectively, are duals of each other.

##### Correlation Theorem

Let $g_1(t) \Longleftrightarrow G_1(t)$ and $g_2(t) \Longleftrightarrow G_2(t)$, then

$$\int_{\infty}^\infty g_1(t)g_2^*(t-\tau)dt \Longleftrightarrow G_1(f)G_2^*(f) \qquad (2.53)$$

##### Rayleigh's Energy Theorem

Let $g(t) \Longleftrightarrow G(f)$, then
$$\int_{-\infty}^{\infty}|g(t)|^2 dt = \int_{-\infty}^{\infty}|G(f)|^2df \qquad (2.55)$$

###### Proof

$\begin{aligned} \int_{-\infty}^\infty g_1(t) g_2^*(t-\tau) dt & \Longleftrightarrow G_1(f) G_2(f) \\ & \rightarrow g_1(t) = g_2(t) =g(t) \\ g(t)g^*(t-\tau) dt & \Longleftrightarrow |G(f)|^2 \\ \int_{-\infty}^\infty g(t) g^*(t-\tau) dt &= \int_{-\infty}^\infty |G(f)|^2 \exp(j2\pi f \tau) df \\ & \rightarrow \tau = 0 \\ \int_{-\infty}^{\infty}|g(t)|^2 dt & = \int_{-\infty}^{\infty}|G(f)|^2df \end{aligned}$

#### Functions

##### Unit Gaussian Pulse

###### Deriving a Fourier Pair with the Same Form

Let's differentiate the analysis equation with respect to $f$

$-j2\pi t g(t) \Longleftrightarrow \frac{d}{df}G(f)$

Now if we impose that $\frac{d}{dt}g(t) = -2\pi t g(t)$, then by taking the Fourier Transform of both sides using the differentiation property (2.34) to replace the derivative of g(t):

$-2\pi f G(f) = \frac{d}{df}G(f)$

which is identical to our definition of $g(t)$. Solving this differential equation gives the Gaussian Pulse:

$$ g(t) = \exp(-\pi t^2) \Longleftrightarrow \exp(-\pi f^2) = G(f) \qquad (2.37)$$

![[Pasted image 20250117074420.png]]

