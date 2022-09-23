import { NgModule } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { TelaCadastroComponent } from './telas/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './telas/tela-login/tela-login.component';
import { TelaSistemaCadastroMedicoComponent } from './telas/tela-sistema-cadastro-medico/tela-sistema-cadastro-medico.component';
import { TelaSistemaCadastroPacienteComponent } from './telas/tela-sistema-cadastro-paciente/tela-sistema-cadastro-paciente.component';
import { TelaSistemaComponent } from './telas/tela-sistema/tela-sistema.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'usuarios', component: TelaCadastroComponent },
  { path: 'home', component: TelaSistemaComponent},
  { path: 'medicos', component: TelaSistemaCadastroMedicoComponent},
  { path: 'pacientes', component: TelaSistemaCadastroPacienteComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private route: ActivatedRoute) { }
}
