import InputError from "@/Components/InputError";
import React, { useCallback, useEffect, useRef, useState } from "react";

function SelectMulti({ data, onChange, value, error, label, name }) {
    const [toggle, setToggle] = useState(false);
    const [term, setTerm] = useState('');
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState([]);
    const ref = useRef(null);

    const inputRef = useCallback((inputElement) => {
        if (inputElement) {
            inputElement.focus();
        }
    });

    useEffect(() => {
        if (value) {
            let itemSelected = data.filter(item => value.includes(item.id));
            setSelected(itemSelected);
        }
    }, []);

    useEffect(() => {
        onChange({
            target: {
                name,
                value: selected.map(item => item.id)
            }
        });

        const debounce = setTimeout(() => {
            setList(data.filter((item) => {
                return item.name.toLowerCase().includes(term.toLowerCase());
            }, term));
        }, 300);

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            clearTimeout(debounce)
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [term, selected]);

    const handleSelect = (event) => {
        let value = list.filter(item => item.id === event.target.value);
        setSelected([...selected, value.pop()]);
    }

    const handleUnselect = (value) => {
        setSelected(selected => selected.filter(item => item.id !== value));
        toggleHandle();
    }

    const items = list.map((item, index) => {
        let sel = selected.map(item => item.id);

        if (!sel.includes(item.id))
            return (
                <li className="px-2 py-1 rounded-lg transition cursor-pointer font-light hover:bg-neutral-100" key={index} onClick={handleSelect} value={item.id}>{item.name}</li>
            );
    });

    const toggleHandle = () => {
        setToggle(!toggle);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setToggle(false);
        }
        setTerm('');
    }

    return (
        <div className="w-full mb-4 relative">
            <label className="font-light">{label}</label>
            <div className="flex border border-neutral-400 rounded-lg p-2" onClick={toggleHandle}>
                <div className="flex-1 flex gap-2">
                    {selected.length > 0
                    ?selected.map((item, i) => {
                        return (
                            <div className="inline-flex justify-between gap-2 items-center text-neutral-700 font-light text-sm bg-neutral-200 rounded-md" key={i}>
                                <span className="pl-2">{item.name}</span>
                                <span onClick={() => handleUnselect(item.id)} className="pr-1 border-l border-neutral-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-4 w-4" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </span>
                            </div>
                        );
                    })
                    :<span className="text-neutral-500">Nenhum {label.toLowerCase()} selecionado</span>}
                </div>
                <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-5 w-5" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
            <InputError message={error} />
            <div className={'absolute z-50 w-full transition ' + (toggle? 'block': 'hidden')} ref={ref}>
                <div className="">
                    <input type="text" value={term} ref={inputRef} onChange={e => setTerm(e.target.value)} className="w-full rounded-t-lg mt-0.5 border-neutral-400 focus:ring-0 focus:border-neutral-500" placeholder="Digite sua pesquisa" />
                </div>
                <div className="max-h-32 p-1 shadow-md rounded-b-lg border-b border-l border-r border-neutral-400 bg-white overflow-auto scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-ful">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SelectMulti;
