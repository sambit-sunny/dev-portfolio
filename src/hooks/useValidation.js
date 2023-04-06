import { useState, useEffect } from "react";

export default function useValidation(value, rules) {
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState([])

    useEffect(() => {
      rules.forEach(rule => {
        const re = new RegExp(rule.pattern)
        if(!re.test(value)) {
            setErrors([...errors, rule.message])
        }
      });
      if(errors.length > 0){
        setIsValid(false)
      } else {
        setIsValid(true)
      }
    }, [value, rules])

    return {isValid, errors}
}
