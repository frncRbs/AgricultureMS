import { useSelector } from 'react-redux';
import { Controller } from 'react-hook-form';

import './_index.scss';

const Input = ({
    type,
    name,
    placeholder,
    required,
    register,
    data,
    label,
    maxLength,
    value,
    _onChange,
}) => {
    const { isLoading } = useSelector((state) => state.auth);

    const onInputChange = (event) => {
        if (event.target.name === 'image') {
            _onChange && _onChange(event.target.id, event.target.value);
        } else {
            _onChange && _onChange(event.target.name, event.target.value);
        }
    };

    switch (type) {
        case 'textarea':
            return (
                <textarea
                    name={name}
                    {...register(name, {
                        required,
                        onChange: (e) => onInputChange(e),
                    })}
                    disabled={isLoading}
                    value={value}
                >
                    {placeholder}
                </textarea>
            );
        case 'date':
            return (
                <div className="input__text">
                    <label>{label}</label>
                    <input
                        type="date"
                        name={name}
                        disabled={isLoading}
                        {...register(name, {
                            required,
                            onChange: (e) => onInputChange(e),
                        })}
                        value={value}
                    />
                </div>
            );
        case 'tel':
            // Just escape the special character and place it in alternation as
            // ^(09|\+639)\d{9}$
            return (
                <div className="input__text">
                    <label>{label}</label>
                    <input
                        type="tel"
                        name={name}
                        disabled={isLoading}
                        {...register(name, {
                            required,
                            onChange: (e) => onInputChange(e),
                        })}
                        value={value}
                        // pattern="/^(09|\+639)\d{9}$/"
                        autoComplete="on"
                        maxLength={maxLength || null}
                        placeholder={placeholder}
                    />
                </div>
            );
        case 'select':
            return (
                <div className="input__text">
                    <label>{label}</label>
                    <select
                        name={name}
                        {...register(name, {
                            required,
                            onChange: (e) => onInputChange(e),
                        })}
                        disabled={isLoading}
                    >
                        {data.map((obj, i) => (
                            <option
                                key={i}
                                selected={
                                    obj['selected'] ||
                                    (obj['value'] === value && value)
                                }
                                value={obj['value']}
                                disabled={obj['disabled']}
                            >
                                {obj['name']}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case 'password': {
            return (
                <div className="input__text">
                    <label>{label}</label>
                    <input
                        type="password"
                        name="password"
                        disabled={isLoading}
                        {...register('password', { required })}
                        placeholder={placeholder}
                    />
                </div>
            );
        }
        case 'text':
        default: {
            return (
                <div className="input__text">
                    <label>{label}</label>
                    <input
                        type="text"
                        name={name}
                        disabled={isLoading}
                        {...register(name, {
                            required,
                            onChange: (e) => onInputChange(e),
                        })}
                        placeholder={placeholder}
                        maxLength={maxLength || null}
                        value={value}
                    />
                </div>
            );
        }
    }
};

export default Input;
