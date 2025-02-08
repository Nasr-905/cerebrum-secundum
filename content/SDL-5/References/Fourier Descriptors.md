Fourier descriptors are derived from the Fourier transform of the shape's boundary. If the boundary is represented as a complex signal \(z(t) = x(t) + iy(t)\), the Fourier descriptors \(a_n\) are given by:
$$a_n = \frac{1}{N} \sum_{k=0}^{N-1} z(k) \cdot e^{-i \frac{2 \pi n k}{N}}$$

where:
- $N$ is the number of boundary points.
- $z(k)$ is the \(k\)-th boundary point in complex form.
- $n$ is the frequency index.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.fft import fft

def compute_fourier_descriptors(boundary):
    # Convert boundary points to complex numbers
    complex_boundary = boundary[:, 0] + 1j * boundary[:, 1]

    # Compute the Fourier Transform
    fourier_descriptors = fft(complex_boundary)

    return fourier_descriptors

def normalize_fourier_descriptors(fourier_descriptors):
    """
    Normalize Fourier Descriptors to make them invariant to scale, rotation, and translation.
    :param fourier_descriptors: Fourier Descriptors (complex numpy array).
    :return: Normalized Fourier Descriptors.
    """
    # Discard the first descriptor (DC component) to make it translation-invariant
    fourier_descriptors = fourier_descriptors[1:]

    # Normalize by the magnitude of the second descriptor to make it scale-invariant
    fourier_descriptors = fourier_descriptors / np.abs(fourier_descriptors[0])

    return fourier_descriptors

def reconstruct_boundary(fourier_descriptors, num_points):

    # Perform the inverse Fourier Transform
    reconstructed_complex = np.ff✅ Yes	t.ifft(fourier_descriptors, n=num_points)

    # Convert back to (x, y) coordinates
    reconstructed_boundary = np.column_stack((np.real(reconstructed_complex), np.imag(reconstructed_complex)))

    return reconstructed_boundary

```