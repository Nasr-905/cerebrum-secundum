---
tags:
  - analog-digital-comm-haykin-moher-2nd/3-4
  - ECE/363/lec5
  - signals-communication
---

This receiver corrects for a changing phase shift in Double Sidebar Suppressed Modulation

Recall that in the non-ideal case:
$$\begin{aligned}
LPF(v(t)) = v_o(t) & = \frac{A_c}{2} m(t) \cos(\phi_e)
\end{aligned}$$
We can also say:
$$\begin{aligned}
v(t) &= s(t) \sin(2\pi f_c t + \phi_e) \\
&= A_c m(t) \cos(2\pi f_c t)\sin(2\pi f_c t + \phi_e) \\
\rightarrow & \cos(A)\sin(B) = \frac{1}2 \left[\sin(A+B) + \sin(A-B)\right] \\
&= A_c m(t) \frac{1}{2} \left[\sin(4\pi f_c t + \phi_e) + \sin(-\phi_e)\right] \\
&= \underbrace{\frac{A_c}{2} m(t) \sin(4\pi f_c t + \phi_e)}_{\text{high frequency}} - \frac{A_c}{2} m(t) \sin(\phi_e)\\
LPF(v(t)) = v_o(t) & =-\frac{A_c}{2} m(t) \sin(\phi_e)
\end{aligned}$$
![[Pasted image 20250121181210.png]]
*Product modulator is just the multiplication operation between its inputs, $90^\circ$ phase shift turns $\cos$ to $\sin$, and the phase discriminator determines *
Essentially the VCO (Voltage-controlled oscillator) attempts to minimize $\frac{A_c}{2} m(t) \sin(\phi_e)$ to zero and maximize $\frac{A_c}{2} m(t) \cos(\phi_e)$ to 1.