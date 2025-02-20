###### Amplitude-modulated Wave
$$s(t) = A_c[1 + k_am(t)]\cos(2\pi f_c t) = [1 + k_am(t)]c(t) \qquad (3.2)$$
- $m(t)$ is the message or information-bearing signal
- $c(t) = A_c\cos(2\pi f_c t)$ is the carrier wave
- $A_c|1 + k_am(t)|$ is the envelope, this resembles $m(t)$, provided that:
	- $|k_am(t)| < 1 \quad \forall t$, so that $1 + k_am(t)$ is always positive
	- $f_c >> W$ where $W$ is the bandwidth of $m(t)$.
		- This is necessary for detection later on.
		- $W$ is also the highest frequency in $m(t)$, where highest means largest significant frequency rather than the frequency with the highest amplitude. This is because $m(t)$ is assumed to be low-pass.

![[Pasted image 20250117194007.png]]
Last one is an example of what we *don't* want.

###### Fourier Transform
$S(f) = \frac{A_c}{2} \left[ \delta(f - f_c) + \delta(f + f_c) \right] + \frac{k_a A_c}{2} \left[ M(f - f_c) + M(f + f_c) \right] \qquad (3.5)$ 

![[Pasted image 20250117195945.png]]

###### Envelope Detection

The detector works if our the two earlier conditions are satisfied.

![[Pasted image 20250117204851.png]]
- $R_s$ is the internal impedance
Operation
- Charges quickly when $s(t) > v_o$ (forward biased diode) to follow the AM wave
	- So we want the charging time to be short compared to the carrier period $\frac{1}{f_c}$ so the capacitor voltage won't lag behind
	- $(r_f + R_s)C << \frac{1}{f_c}$
- Discharges slowly when $s(t)< v_o$ (reverse biased/cutoff) to keep the voltage high
	- So we want the discharging time to be longer than the carrier period, but fast enough that it discharges faster than the maximum rate of change of the message
	- Max rate of change -> highest frequency ($W$)
	- $\frac{1}{f_c} << R_lC << \frac{1}W$
- The result is that $v_o$, the voltage in the capacitor, matches the envelope