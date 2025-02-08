1. **Initial Model Training**:
    
    - Start with a small labeled dataset and train an initial model.
        
2. **Query Strategy**:
    
    - Use the model to predict on unlabeled data.
        
    - Identify the most "informative" or "uncertain" data points (e.g., those the model is least confident about).
        
3. **Labeling**:
    
    - Send these selected data points to a human annotator for labeling.
        
4. **Model Update**:
    
    - Add the newly labeled data to the training set and retrain the model.
        
5. **Iteration**:
    
    - Repeat the process until the model achieves satisfactory performance or the labeling budget is exhausted.