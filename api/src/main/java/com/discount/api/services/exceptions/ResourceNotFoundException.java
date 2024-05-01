package com.discount.api.services.exceptions;

public class ResourceNotFoundException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(Object codigoGame){
        super("Resource not found. Id " + codigoGame);
    }
}
