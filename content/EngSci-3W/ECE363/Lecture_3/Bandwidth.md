01.14.25 1300-1500

###### Strictly Limited in Frequency/Time

A signal is strictly limited in frequency (also called strictly band limited) if outside a certain bandwidth, the Fourier Transform is exactly zero. *If a Fourier transform is strictly limited in frequency, it's time domain signal will trail on attaining nonzero values into infinity, even if the amplitude of the function goes to zero.*

Similarly a signal is strictly limited in time if outside a time interval, the signal is exactly zero. If a signal is strictly limited in time, then its Fourier Transform will trail off indefinitely, meaning it will be comprised of infinite frequencies, even if the amplitude diminishes.

**Therefore, a given signal and its Fourier transform cannot be both strictly time and frequency limited**

##### Bandwidth

###### Low-pass Signal
If a signal's most significant frequency is centered around $0$.
![[Pasted image 20250117175043.png]]
Main lobe bounded bandwidth for low-pass signals: $BW = W$ because only half is in the positive frequency range
###### Band-pass Signal
Significant frequency is centered around some $\pm f_c$
![[Pasted image 20250117174908.png]]

Null-to-Null bandwidth for band-pass signals: $BW = \frac{2}T$

###### 3-dB Bandwidth
The distance between $f_c$ ($f_c = 0$ for low-pass signals), and the positive frequency at which the signal dips to $\frac{1}{\sqrt2}$ of the peak value at $f_c$. For oscillatory signals this may be *the first time* the signal dips below $\frac{1}{\sqrt2}$ on the positive side, or the last time (the point at which all further frequencies are less than $\frac{1}{\sqrt2}$) depending on what you want.

##### Dirac Delta Function

$\delta(t) = 0 \quad \forall t \neq 0$ and $\int_{-\infty}^\infty \delta(t)dt = 1$ 

###### Sifting/Replication Property
$$\int_{-\infty}^\infty g(\tau)\delta(t - \tau)dt =g(t)*\delta(t)=  g(t) \qquad (2.63)$$

###### Fourier Transform
$\delta(t) \Longleftrightarrow 1, \qquad 1 \Longleftrightarrow \delta(f)$

###### Frequency Shifting Property
$$\exp(-j2\pi f_c t) \Longleftrightarrow \delta(f-f_c)$$

##### Definitions

###### Power Signal
Signals where the following holds:
$$\lim_{T\to \infty} \frac{1}{2T}\int_{-T}^T|g(t)|^2dt < \infty$$