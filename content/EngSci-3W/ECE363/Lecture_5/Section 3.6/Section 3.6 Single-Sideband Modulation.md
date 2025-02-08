SSB Modulation attempts to be power efficient and bandwidth efficient, but it's limited in use cases.

It was  originally designed for voice signals (telephones), this is because they have a unique structure with a small energy gap around 0 frequency.  

![[Pasted image 20250121194848.png]]
*Original Message*

###### Transmitter ($T_x$)
![[Pasted image 20250121202346.png]]

SSB begins similar to DSB-SC by multiplying the message by $A_c\cos2\pi f_c t$ to get:
$$s_{SSB}(t) = A_c m(t)\cos2\pi f_ct \Longleftrightarrow S_{SSB}(f) = \frac{A_c}2[M(f-f_c)+M(f+f_c)]$$
Similar to DSB-SC, there's no carrier signal, so that power isn't wasted.
![[Pasted image 20250121204437.jpg]]
*(b) gets multiplied by (c) to obtain (d). Notice that the bandwidth of the propagated signal is equivalent to that of the original message, so there's no wasted bandwidth*
###### Receiver
![[Pasted image 20250121205302.jpg]]
**