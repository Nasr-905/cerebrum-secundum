---
date: 2024-07-18
---

- Can perform [semantic segmentation](https://www.cs.toronto.edu/~tingwuwang/semantic_segmentation.pdf)
    

- The ability to distinguish areas of the data
    

- Point Net Extracts both local and global features of a Point Cloud with any orientation
    

- Still not entirely sure what this means
    
- Analyses point clouds
    

- A Point Cloud is a set of 3D points that are invariant to both order and rigid motion
    

- Point cloud analysis (Like CNNs) are feature extractors and usually go before a classifier (like SVM or MLP)
    
- When we want to learn an object like an airplane, how can we get the model to understand they have a nose, wings, tail etc.?
    

- We can’t specify this for every class, so we need a way for the model to learn the features itself
    

- PointNet consumes an entire point cloud, learns a spatial encoding of each point, aggregates learned encodings into features, and feeds them into Classification and Segmentation heads.
    

- encoding is the transformation of data into model inputs
    
- embeddings are the representation of the inputs in latent space
    

- The PointNet Model attempts to approximate the following function
    
- ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeMI_F7WG3hjF-TqOBxtZI0ytu3dEZRDZQWtrOqau0hkcTjmlledcsW9sb6OC1CRTKTot_T4HOzcym6F5K4DBF1GIN1v4evgnEHrWLsNM1ES2Thg1dsxkSj8SfWTbJt1Aw3uUvvJ7zcDgx1cm9HWBdlVzI?key=7vFfL5AL6Pwc38RPFd4PPg)
    

- f is symmetric where “a symmetric function takes n vectors as input and outputs a new vector that is invariant to the input order”
    

- This is important given that point clouds are symmetric
    

- x_1, x_2, .., x_n are inputs
    
- g is the max pooling function
    

- Max pooling occurs on features/dimensions across inputs
    

- h is a MLP with weights shared between inputs
    

- ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcVKGOJg-d56Ig3lHyslUtmO-x8T-mx1psZgRuQ8oHodez9jbgAcxy5YwlfNqMsXkUcG0pnsAN1EUeimNRmEF3kDzWiPzDE-S1CqtFhzCpPodU-_DG9t_rebAjdjZNnomE9RBF4gNrPRsMT5jTcxspv98ZM?key=7vFfL5AL6Pwc38RPFd4PPg)
    
- A T-net is a special Neural Network that learns a transformation matrix that will rotate the input point cloud to a consistent orientation.
    

- Rotate here isn’t literal
    
- T-net begins with a learned transformation matrix
    

-   
    

- The T-net is a mini Point Net that performs it’s own feature extraction with a shared MLP and Max Pooling function, it then uses Fully Connected layers to scale down the features into a transformation matrix
    

- The transformation matrix begins as the identity, and the output of the model is then added to it
    
- Right before the max pool are where the local features lie
    
- After the max pool, there are global features
    

- The max pooling layer retains the highest importance points that define the shape
    
- If we were to initialize to zero, then we would set all the points to zero, if we were to use a random initialization, then we could disrupt the structure of the point cloud.![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfaLDFzS6MgcT2IDVhTZdSKmkeqPSIjknmyTCC_rWmqz1qNqosjeMFvcQWSylrVBMd1uQiofMOfpXXBu2pJ0XBtp2SRj8ByeZ1TUO9JeJM8Zya4mpiz6Ymxy9Ckch5FihqICow1iH_rbTWYvERxnz2xyeUb?key=7vFfL5AL6Pwc38RPFd4PPg)
    

- The critical points are the global features
    

- Classification head just uses the global features
    
- Segmentation head uses global and local features
    

- The global features are essentially added to each of the point features to go from nx64 local features, 1024 global features, to nx1088 input.
    



**