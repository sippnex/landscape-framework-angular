import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppRegistryService, AppType} from 'ngx-landscape-core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';
import {AppAdminService} from '../app-admin.service';
import {FiremawDto, FiremawType} from 'ngx-firemaw-client';

@Component({
  selector: 'lib-app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.scss']
})
export class AppItemComponent implements OnInit {

  firstStepEnabled = false;
  firstStepFormGroup: FormGroup;

  appTypes: AppType[] = [];
  selectedAppType: AppType;

  appFiremawDto: FiremawDto;
  FiremawType: typeof FiremawType = FiremawType;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private appRegistryService: AppRegistryService, private appAdminService: AppAdminService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const appId = params['id'];
      if (appId) {
         this.loadApp(appId);
      } else  {
        this.firstStepEnabled = true;
        this.firstStepFormGroup = this.formBuilder.group({
          doneControl: ['', Validators.required]
        });
        this.appTypes = this.appRegistryService.getAllAppTypes();
      }
    });
  }

  selectAppType(stepper: MatStepper, appType: AppType) {
    this.selectedAppType = appType;
    this.loadAppSkeleton(appType);
    this.firstStepFormGroup.controls.doneControl.setValue('done');
    stepper.next();
  }

  loadApp(appId: string) {
    this.appAdminService.getAppById(appId).subscribe((appFiremawDto: FiremawDto) => {
      this.appFiremawDto = appFiremawDto;
    });
  }

  loadAppSkeleton(appType: AppType) {
    this.appAdminService.getAppSkeleton(appType).subscribe((appFiremawDto: FiremawDto) => {
      this.appFiremawDto = appFiremawDto;
    });
  }

}
