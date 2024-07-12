from django.db import models
import math


# Data Base
class Data(models.Model):
     sf_material_expense = 1 # $ per board feet
     paint_material_expense = 2 # $ per sft
     labor_expense = 42 # $ per hour per person
     suits_expense = 75 # $ per person per day
     truck_expense = 100 # $ per day
     protection_expense = 0.3 # $ per ft

     class Meta:
          managed = False

# Client Database 
class Client(models.Model):
     client_id = models.AutoField(primary_key=True)
     first_name = models.CharField(null=False, max_length=31) #Pekwachnamaykoskwaskwaypinwanik
     middle_name = models.CharField(blank=True, max_length=31)
     last_name = models.CharField(null=False, max_length=31)
     email = models.CharField(blank=True, max_length=100)
     phone = models.CharField(blank=True, max_length=10)
     property_address = models.CharField(null=False, max_length=1000)
     billing_address = models.CharField(blank=True, default=property_address, max_length=1000)

# Estimate Database
class Estimate(models.Model):
    estimate_id = models.AutoField(primary_key=True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='clients')  

# Scope of Work Database
class ScopeOfWork(models.Model):
     INSULATION = 'Insulation'
     ABATEMENT = 'Abatement'
     CLEAN_REMOVAL = 'Clean Removal'
     
     SCOPE_CHOICES = [
        (INSULATION, 'Insulation'),
        (ABATEMENT, 'Abatement'),
        (CLEAN_REMOVAL, 'Clean Removal'),
    ]
     
     scope_id = models.AutoField(primary_key=True)
     estimate = models.ForeignKey(Estimate, on_delete=models.CASCADE, related_name='scope_of_work')


# Insulation Database
class Insulation(models.Model):
     SPRAY_FOAM = 'Spray Foam'
     BLOWN_CELLULOSE = 'Blown Cellulose'
     BATTS = 'Batts'

     INSULATION_CHOICES = [
        (SPRAY_FOAM, 'Spray Foam'),
        (BLOWN_CELLULOSE, 'Blown Cellulose'),
        (BATTS, 'Batts'),
    ]
     
     insulation_id = models.AutoField(primary_key=True)
     scope = models.ForeignKey(ScopeOfWork, on_delete=models.CASCADE, related_name='insulations')

# Spray Foam Database
class SprayFoam(models.Model):
    WALL = 'Wall'
    RIM_JOIST = 'Rim Joist'

    LOCATION_CHOICES = [
        (WALL, 'Wall'),
        (RIM_JOIST, 'Rim Joist'),
    ]

    spray_foam_id = models.AutoField(primary_key=True)
    insulation = models.ForeignKey(Insulation, on_delete=models.CASCADE, related_name='spray_foam')

# Wall Database
class Wall(models.Model):
    wall_id = models.AutoField(primary_key=True)
    length = models.FloatField(null=False)
    height = models.FloatField(null=False)
    thickness = models.FloatField(null=False)
    paint = models.BooleanField(null=False, default = False)
    time = models.IntegerField(null=False)
    crew = models.IntegerField(null=False, default=0)
    profit = models.FloatField(null=False)
    spray_foam = models.ForeignKey(SprayFoam, on_delete=models.CASCADE, related_name='wall')


    # Calculator
    def calculate_expenses(self):
         area = self.length * self.height
         days = math.ceil(self.time / 8)
         sf_total_expense = area * self.thickness * Data.sf_material_expense
         paint_total_expense = area * Data.paint_material_expense if self.paint else 0
         labor_total_expense = self.time * self.crew * Data.labor_expense
         suits_total_expense = days * Data.suits_expense
         truck_total_expense = days * Data.truck_expense
         protection_total_expense = self.length * Data.protection_expense
         total_expense = math.ceil(sf_total_expense + paint_total_expense + labor_total_expense + suits_total_expense + truck_total_expense + protection_total_expense)
         total_sale = math.ceil(total_expense * (1 + (self.profit / 100)))

         # Expenses Breakdown
         print(f'Expenses Breakdown:\n'
               f'Spray Foam Material Expense {sf_total_expense}\n'
               f'Intumescent Paint Material Expense {paint_total_expense}\n'
               f'Labor Expense {labor_total_expense}\n'
               f'Suits/Gloves/Masks Material Expense {suits_total_expense}\n'
               f'Truck Expense {truck_total_expense}\n'
               f'Protection Material Expense {protection_total_expense}\n'
               f'\n'
               f'Total Expense: {total_expense}\n'
               f'Total Sale: {total_sale}\n'
               )

         return sf_total_expense, paint_total_expense, labor_total_expense, suits_total_expense, truck_total_expense, protection_total_expense, total_expense, total_sale

