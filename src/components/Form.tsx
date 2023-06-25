
export function Form() {

    return (
      <form className="flex flex-col gap-5 w-96 mb-44">
          <label>
              <div className="text-orange-700 font-bold text-2xl">Email</div>
              <input className="border border-orange-700 h-12 w-full p-1" type="text" name="name" />
          </label>
          <label>
              <div className="text-orange-700 font-bold text-2xl">Senha</div>
              <input className="border border-orange-700 h-12 w-full p-1" type="password" name="password" />
          </label>
          <input className="bg-orange-700 text-white rounded-xl p-2 w-72 self-center text-xl hover:bg-orange-600" type="submit" value="Entrar" />
       </form>
    );
  }