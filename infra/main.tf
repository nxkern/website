terraform {
  required_providers {
    docker = {
      source = "registry.opentofu.org/kreuzwerker/docker"
      version = "~> 4.2.0"
    }
  }
}


provider "docker" {
  host = var.host_homelab
}


data "docker_registry_image" "website" {
  name = var.url_image
}

resource "docker_image" "website" {
  name = data.docker_registry_image.website.name 
  pull_triggers = [data.docker_registry_image.website.sha256_digest]
}

resource "docker_container" "website" {
  name = "website"
  image = docker_image.website.image_id

  ports {
    internal = 3000
    external = 3010
  }
  networks_advanced {
    name = "homelab_net"
  }
  env = [
    "NUXT_API_KEY_WORKER=${var.nuxt_api_key_worker}"
  ]
  restart = "always"
}

