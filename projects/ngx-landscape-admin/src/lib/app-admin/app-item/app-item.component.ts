import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppRegistryService, AppType} from 'ngx-landscape-core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material';
import {AppAdminService} from '../app-admin.service';
import {FiremawDto, FiremawType} from 'ngx-firemaw-client';
import {DialoguesService} from '../../shared/dialogues/dialogues.service';

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private appRegistryService: AppRegistryService,
              private appAdminService: AppAdminService,
              private dialoguesService: DialoguesService) { }

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

  saveApp() {
    if (this.appFiremawDto.getProperty('id').value) {
      this.updateApp(this.appFiremawDto);
    } else {
      this.createApp(this.appFiremawDto);
    }
  }

  goBack() {
    this.router.navigateByUrl('/admin/app-list');
  }

  createApp(appFiremawDto: FiremawDto) {
    this.appAdminService.createApp(appFiremawDto).subscribe(() => {
      this.dialoguesService.showSuccessSnackbar('App created successfully');
    }, error => {
      this.dialoguesService.showErrorSnackbar('App could not be created');
      console.error('App could not be created!', error);
    });
  }

  updateApp(appFiremawDto: FiremawDto) {
    this.appAdminService.updateApp(appFiremawDto).subscribe(() => {
      this.dialoguesService.showSuccessSnackbar('App saved successfully');
    }, error => {
      this.dialoguesService.showErrorSnackbar('App could not be saved');
      console.error('App could not be saved!', error);
    });
  }

}
