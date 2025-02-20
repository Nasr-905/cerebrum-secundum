---
tags:
  - ECE/355
  - ECE/363
  - signals-communication
---
$\delta(t) = 0 \quad \forall t \neq 0$ and $\int_{-\infty}^\infty \delta(t)dt = 1$ 
###### Sifting/Replication Property
$$\int_{-\infty}^\infty g(\tau)\delta(t - \tau)dt =g(t)*\delta(t)=  g(t) \qquad (2.63)$$
###### Fourier Transform
$\delta(t) \Longleftrightarrow 1, \qquad 1 \Longleftrightarrow \delta(f)$
###### Frequency Shifting Property
$$\exp(-j2\pi f_c t) \Longleftrightarrow \delta(f-f_c)$$