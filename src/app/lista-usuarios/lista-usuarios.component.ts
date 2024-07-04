import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data: Usuario[]) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error fetching usuarios:', error);
      }
    );
  }

  bloquearUsuario(usuario: Usuario): void {
    this.usuarioService.bloquearUsuario(usuario).subscribe(
      (updatedUser: Usuario) => {
        // Actualiza la lista de usuarios en el componente
        const index = this.usuarios.findIndex(u => u.codigoUsuario === updatedUser.codigoUsuario);
        if (index !== -1) {
          this.usuarios[index] = updatedUser;
        }
      },
      (error) => {
        console.error('Error blocking usuario:', error);
      }
    );
  }

  desbloquearUsuario(usuario: Usuario): void {
    this.usuarioService.desbloquearUsuario(usuario).subscribe(
      (updatedUser: Usuario) => {
        const index = this.usuarios.findIndex(u => u.codigoUsuario === updatedUser.codigoUsuario);
        if (index !== -1) {
          this.usuarios[index] = updatedUser;
        }
      },
      (error) => {
        console.error('Error unblocking usuario:', error);
      }
    );
  }

  navigateToMenu() {
    this.router.navigate(['opciones']);
  }


  
}
