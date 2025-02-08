##### Transmitter
Recall that AM is power and bandwidth inefficient, DSB-SC attempts to be more power efficient.
$$\begin{aligned} \text{Amplitude Modulation:}\qquad &s(t) = \underbrace{\cancel{A_c\cos(2\pi f_c t)}}_{\text{doesn't contain message, wasted power}} + A_ck_am(t)\cos(2\pi f_ct)\\ \text{DSB-SC}\qquad & s(t) = A_cm(t)\cos(2\pi f_ct) \end{aligned}$$

*Note: Similar to AM, bandwidth of the message for DSB-SC ($W$) is expected to be much smaller than $f_c$, that is:*
$$ BW = W << f_c$$
*This is so that, in the frequency domain, when the cosine doubles the message, they don't overlap*

![[Pasted image 20250121155008.png]]
###### The Envelope doesn't follow the message
Notice: We get phase reversals because the original message not everywhere positive, so the envelope (dashed line), doesn't follow the message. As a result, we can't use our previous envelop detector. 

##### Receiver
$$ \begin{aligned} s(t) \to \underset{\underset{\cos(2\pi f_c t)}{\uparrow}}{\boxed{\times}}\to v(t) \to \boxed{\text{Low-pass Filter}} \to v_o(t)\end{aligned}$$
where $v_o(t)$ is a scaled version of the message called the *demodulated signal*.

$$\begin{aligned} v(t) &= s(t) \cos(2\pi f_c t) \\ &= A_c m(t) \cos^2(2\pi f_c t) \\ &= A_c m(t) \left[ 1 +  \frac{1}{2} \cos(4\pi f_c t) \right] \\ &= \underbrace{\frac{A_c}{2}m(t)}_{\text{Desired}} + \underbrace{\frac{A_c}{2}m(t) \cos(2\pi (2f_c) t)}_{\text{High frequency of }2f} \\
LPF(v(t))= v_o(t)& = \frac{A_c}{2}m(t) \end{aligned}$$
*Note: Low-pass filter removes high frequencies in a signal*

##### Frequency Domain

$$\begin{aligned} s(t) & = \frac{A_c}{2}m(t)\cos(2\pi f_c t) \\ & = \frac{A_c}2m(t)\left[e^{j2\pi f_c t} + e^{-j2\pi f_c t}\right] \\ S(f)& = \frac{A_c}2 \left[M(f-f_c) + M(f+f_c)\right]\end{aligned}$$

![[Pasted image 20250121162239.png]]
*As we can see, although the signal doesn't waste power in transmitting a carrier, it still wastes bandwidth since $BW(S(f)) = 2\times BW(M(f))$*

$$\begin{align} v(t) &= \frac{A_c}{2} m(t) + \frac{A_c}{2} m(t) \cos(4\pi f_c t)\\ V(f) &= \frac{A_c}{2} M(f) + \frac{A_c}{4} \left[ M(f - 2f_c) + M(f + 2f_c) \right], \end{align}$$

![[Pasted image 20250121164526.jpg]]

![[Pasted image 20250121164705.jpg]]

##### Synchronization

Up until now, we've assumed that the frequency of the the transmitted signal ($s(t)$) is equal to the signal frequency of the $\cos(2\pi f_c t)$ multiplied by the receiver ($v(t) = s(t)\cos(2\pi f_c t)$, but in practice, they are never equal due to uncertainty.

###### Taking into account phase difference

![[Pasted image 20250121173438.png]]
$$\begin{aligned}
v(t) &= s(t) \cos(2\pi f_c t + \phi_e) \\
&= A_c m(t) \cos(2\pi f_c t)\cos(2\pi f_c t + \phi_e) \\
\rightarrow& \cos(A)\cos(B) = \frac{1}2 \left[\cos(A+B) + \cos(A-B)\right] \\

&= \underbrace{\frac{A_c}{2} m(t) \cos(4\pi f_c t + \phi_e)}_{\text{high frequency}} +\frac{A_c}{2} m(t) \cos(\phi_e)\\
LPF(v(t)) = v_o(t) & = \frac{A_c}{2} m(t) \cos(\phi_e)
\end{aligned}$$
*If $\phi_e$ is small and constant then $\cos(\phi_e) \approx 1$, and we wouldn't have to worry about it, this is not often the case, so we need a circuit to track $\phi_e$.*
(WHAT IF IT'S CONSTANT BUT LARGE? CAN'T WE JUST INCREASE THE AMPLITUDE?)