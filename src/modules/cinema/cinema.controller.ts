import { Controller } from '@nestjs/common';

import { CinemaService } from './cinema.service';

@Controller()
export class CinemaController {
    constructor(private readonly cinemaService: CinemaService) {}
}
