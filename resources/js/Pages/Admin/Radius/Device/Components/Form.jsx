import React from "react";
import Input from "@/Components/Form/Input";
import InputError from "@/Components/InputError";
import Button from "@/Components/Form/Button";

export default function Form({data, errors, handleSubmit, onHandleChange, processing }) {
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4">
                <label htmlFor="nasname" className="font-light">IP</label>
                <Input value={data.nasname} name={'nasname'} handleChange={onHandleChange} required={true} placeholder="Digite o IP do dispositivo" />
                <InputError message={errors.nasname} />
            </div>
            <div className="mb-4">
                <label htmlFor="shortname" className="font-light">Nome</label>
                <Input value={data.shortname} name={'shortname'} handleChange={onHandleChange} required={true} placeholder="Digite o nome do dispositivo" />
                <InputError message={errors.shortname} />
            </div>
            <div className="mb-4">
                <label htmlFor="ports" className="font-light">Porta</label>
                <Input value={data.ports} name={'ports'} handleChange={onHandleChange} required={true} placeholder="Digite a porta de comunicação" />
                <InputError message={errors.ports} />
            </div>
            <div className="mb-4">
                <label htmlFor="secret" className="font-light">Palavra secreta</label>
                <Input value={data.secret} name={'secret'} handleChange={onHandleChange} required={true} placeholder="Digite a palavra secreta" />
                <InputError message={errors.secret} />
            </div>
            <div className="mb-4">
                <label htmlFor="server" className="font-light">Servidor</label>
                <Input value={data.server} name={'server'} handleChange={onHandleChange} required={false} placeholder="Digite o servidor" />
                <InputError message={errors.server} />
            </div>
            <div className="mb-4">
                <label htmlFor="community" className="font-light">Comunidade</label>
                <Input value={data.community} name={'community'} handleChange={onHandleChange} required={false} placeholder="Digite a comunidade" />
                <InputError message={errors.community} />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="font-light">Descrição</label>
                <Input value={data.description} name={'description'} handleChange={onHandleChange} required={true} placeholder="Digite a descrição" />
                <InputError message={errors.description} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
                <Button type={'submit'} processing={processing} color={'green'} className={"gap-2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                    </svg>
                    <span>Enviar</span>
                </Button>
                <Button href={route('nas.index')} className={'gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                        <path fillgroup="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <span>Voltar</span>
                </Button>
            </div>
        </form>
    )
}

