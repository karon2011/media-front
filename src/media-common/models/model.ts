/**
 * Represents an object mapped on a database record/ruby model.
 * Such Model object are managed with a REST/JON webservice.
 */
export interface Model {
    /**
     * Identify the model object.
     */
    readonly id:number
  
    // /**
    //  * Datetime when the model was deleted
    //  */
    // readonly deleted_at?:string
  }