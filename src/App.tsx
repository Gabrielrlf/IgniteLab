import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'
export function App() {

  return (
    <>
      <div className=' flex-col w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center'>
          <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
          <Text size='lg' className='text-gray-400 mt-1'>Faça login e comece a usar</Text>
        </header>

        <form className='flex flex-col items-stretch w-full max-w-sm mt-10'>
          <label htmlFor='email' className='flex flex-col gap-2'>
            <Text className='font-semibold'>Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input type="email" id="Email" placeholder='Digite seu e-mail' />
            </TextInput.Root>
          </label>


          <label htmlFor='password' className='flex flex-col gap-2 mt-2'>
            <Text className='font-semibold'>Sua Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type="password" id="Password" placeholder='********' />
            </TextInput.Root>
          </label>

          <label htmlFor='remember' className='flex items-center gap-2 mt-2'>
            <Checkbox />
            <Text size='sm' className='text-gray-100'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button>Entrar na plataforma</Button>
        </form>

        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text asChild size="sm">
            <a href="" className="text-gray-400 underline">Esqueceu sua senha?</a>
          </Text>
          <a href="" className="text-gray-400 underline">Não possui conta? Crie uma agora!</a>
        </footer>
      </div>
    </>

  )
}

